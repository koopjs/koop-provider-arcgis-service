# koop-provider-arcgis-service
Pass through to an ArcGIS service.  Intended to be the starting point for a provider that acquires data from a feature service and then enriches it prior to responding.

## Usage

This provider leverages the `:id` parameter to store a target feature-service layer url. The feature-service layer url should be url-encoded.  For example:

`http://services.arcgis.com/bkrWlSKcjUDFDtgw/ArcGIS/rest/services/2015_crime_dc/FeatureServer/0`

becomes:

`http%3A%2F%2Fservices.arcgis.com%2FbkrWlSKcjUDFDtgw%2FArcGIS%2Frest%2Fservices%2F2015_crime_dc%2FFeatureServer%2F0`

So, using the Koop default geoservices output query route (e.g., `/arcgis-service/:id/FeatureServer/0/query`), you would make a query like:

`/arcgis-service/http%3A%2F%2Fservices.arcgis.com%2FbkrWlSKcjUDFDtgw%2FArcGIS%2Frest%2Fservices%2F2015_crime_dc%2FFeatureServer%2F0/FeatureServer/0/query`

## Try it out

The provider ships with an example `server.js` file that starts Koop and registers the provider.  You can kick it off with:

```
$ npm start
```

Koop will be listening at `8080`. You can then make the sample request:

http://localhost:8080/arcgis-service/http%3A%2F%2Fservices.arcgis.com%2FbkrWlSKcjUDFDtgw%2FArcGIS%2Frest%2Fservices%2F2015_crime_dc%2FFeatureServer%2F0/FeatureServer/0/query
