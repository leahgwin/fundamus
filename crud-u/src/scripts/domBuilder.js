//calls get book list from API and prints it to the dom.  Exports printer function to be used when a new book is saved

//require jquery & apiController
const $ = require("jquery")
const apiController = require("./apiController")

const cardContainer = $("<div>").attr("id", "card-container")
const printDom = Object.create({}, {
  printer: {
    value: function () {
      apiController.getMediaList().then((mediaList) => {
        console.log("here tis", mediaList)
        mediaList.forEach(item => {
          console.log("one item at a time", item);

          const mediaCard = $("<div>").addClass("media-card")
          const mediaTitle = $("<h2>").text(item.title).addClass("media-title-heading")
          const mediaType = $("<h4>").text(item.type).addClass("media-type-heading")
          const finishedCheckbox = $(`<input type='checkbox' id='finished-checkbox-${item.id}'><label> Mark As Completed </label>`).addClass("checkbox")
          const deleteMediaButton = $("<button>").addClass("button").addClass("delete-media-button").text("Delete")


          mediaCard.append(mediaTitle)
            .append(mediaType)
            .append(finishedCheckbox)
            .append(deleteMediaButton)
          mediaCard.appendTo(cardContainer)

        });
      })
      cardContainer.appendTo("#display-container")
    }
  }
})

module.exports = printDom