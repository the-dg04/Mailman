import { connectToMongo } from "@/libs/mongo.lib";
import RequestsModel from "@/models/requestsModel";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { requestURL,requestMethod,requestParams,requestHeaders,requestBody,requestResponse} = await request.json()
        await connectToMongo()
        console.log(requestURL,requestMethod,requestParams,requestHeaders,requestBody,requestResponse);
        await RequestsModel.create({ requestURL,requestMethod,requestParams,requestHeaders,requestBody,requestResponse})
        await mongoose.connection.close()
        return NextResponse.json({ message: "Message sent successfully" }, { status: 201 })
    } catch (err) {
        console.error(err)
        await mongoose.connection.close()
        return NextResponse.json({ message: "Failed to send message " }, { status: 400 })
    }
}
