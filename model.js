const request = require('request-promise')
const querystring = require('query-string')
/**
 * Model constructor
 */
function Model () {}

/**
 * Fetch data from source.  Pass result or error to callback.
 * This is the only public function you need to implement on Model
 * @param {object} express request object
 * @param {function} callback
 */
Model.prototype.getData = async function (req, callback) {
  
  // req.params.id holds the URL-encode URL to a feature service layer
  const layerUrl = decodeURI(req.params.id)

  // If no where parameter, add the required 1=1
  if (!req.query.where) req.query.where = '1=1'

  // If no outfields parameter, add *
  if (!req.query.outFields) req.query.outFields = '*'

  // Format to geojson
  req.query.f = 'geojson'

  // Construct full URL to feature service
  const queryParamStr = querystring.stringify(req.query)
  const queryUrl = `${layerUrl}/query?${queryParamStr}`
  
  // Get data from the feature service
  request(queryUrl, {json: true})
  .then(function (geojson) {
    callback(null, geojson)
  })
  .catch(function (err) {
      callback(err)
  });
}

module.exports = Model
