import { connectToMongo } from "@/libs/mongo.lib";
import RequestsModel from "@/models/requestsModel";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { requestURL,requestMethod,requestParams,requestHeaders,requestBody,requestResponse} = await request.json()
        await connectToMongo()
        const requestName="New Request"
        console.log(requestName,requestURL,requestMethod,requestParams,requestHeaders,requestBody,requestResponse);
        const newRequest=await RequestsModel.create({ requestName,requestURL,requestMethod,requestParams,requestHeaders,requestBody,requestResponse})
        console.log(newRequest);
        await mongoose.connection.close()
        return NextResponse.json({ result: {'id':newRequest.id,'name':"New Request","editMode":false} }, { status: 201 })
    } catch (err) {
        console.error(err)
        await mongoose.connection.close()
        return NextResponse.json({ message: "Failed to send message " }, { status: 400 })
    }
}
