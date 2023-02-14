const asyncHandler = require('express-async-handler');

// this function get the links
// the route is GET/iframe/link
const getLink = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error ('PLease add text')
    }

    res.status(200).json({message: "jebne"})
})

// this function Create the links
// the route is POST/iframe/link
const setLink = asyncHandler(async (req, res) => {
    res.status(200).json({message: '3melne' })
}
)

// this function Updates the links
// the route is PUT/iframe/link/:id
const updateLink = asyncHandler(async (req, res) => {
    res.status(200).json({message: `3addalna b link ${req.params.id}` })
})

// this function delete link
// the route is DELETE/iframe/link/:id
const deleteLink = asyncHandler(async (req, res) => {
    res.status(200).json({message: `m7ina link ${req.params.id}` })
})


module.exports = {
    getLink,
    setLink,
    updateLink,
    deleteLink,
}