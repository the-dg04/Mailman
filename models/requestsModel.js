import { Schema, model, models } from "mongoose";
const requestsSchema = new Schema({
    requestURL: String,
    requestMethod: String,
    requestParams: String,
    requestHeaders: String,
    requestBody: String,
    requestResponse: String,
},
    {
        timestamps: true
    }
)
const RequestsModel = models.requestsModel || model("requestsModel", requestsSchema)
export default RequestsModel;