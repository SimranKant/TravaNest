const Listing = require("../models/listing.js");
module.exports.index = async (req, res) => {
  let allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");
  if (!listing) {
    req.flash("error", "Listing you requested for does not exist!");
    res.redirect("/listings");
  } else {
    res.render("listings/show.ejs", { listing });
  }
};

module.exports.createListing = async (req, res, next) => {
  let url = req.file.path;
  let filename = req.file.filename;
  let { listing } = req.body;
  let newListing = new Listing(listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };
  await newListing.save();
  req.flash("success", "New Listing Created");
  res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing you requested for does not exist!");
    res.redirect("/listings");
  } else {
    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");
    res.render("listings/edit.ejs", { listing, originalImageUrl });
  }
};

module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  let { listing } = req.body;
  let updatedlisting = await Listing.findByIdAndUpdate(id, listing);
  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    updatedlisting.image = { url, filename };
    await updatedlisting.save();
  }
  req.flash("success", "Listing Updated");
  res.redirect(`/listings/${id}`);
};

module.exports.deleteListing = async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success", "Listing Deleted");
  res.redirect("/listings");
};

module.exports.search = async (req, res) => {
  const { q } = req.query;

  // Redirect to the listings index if the search query is empty or missing
  if (!q || q.trim() === "") {
    return res.redirect("/listings");
  }

  try {
    const regex = new RegExp(q, "i"); // Case-insensitive regular expression

    // Query the database using MongoDB's $or operator for multiple fields
    const filteredListings = await Listing.find({
      $or: [
        { title: { $regex: regex } },
        { location: { $regex: regex } },
        { description: { $regex: regex } },
        { country: { $regex: regex } },
      ],
    });

    // Render the results using the appropriate view template
    res.render("listings/index.ejs", { allListings: filteredListings });
  } catch (error) {
    console.error("Error during search:", error);
    res.status(500).send("Internal Server Error");
  }
};
