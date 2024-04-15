import { Schema, model, models } from "mongoose";
const requestsSchema = new Schema({
    requestName: String,
    requestURL: String,
    requestMethod: String,
    requestParams: String,
    requestHeaders: String,
    requestBody: String,
    requestResponse: String,
    requestResponseCode: Number,
},
    {
        timestamps: true
    }
)
const RequestsModel = models.requestsModel || model("requestsModel", requestsSchema)
export default RequestsModel;