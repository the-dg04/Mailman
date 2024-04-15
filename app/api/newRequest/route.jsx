import { connectToMongo } from "@/libs/mongo.lib";
import RequestsModel from "@/models/requestsModel";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { requestURL,requestMethod,requestParams,requestHeaders,requestBody,requestResponse,requestResponseCode} = await request.json()
        await connectToMongo()
        const requestName="New Request"
        const newRequest=await RequestsModel.create({ requestName,requestURL,requestMethod,requestParams,requestHeaders,requestBody,requestResponse,requestResponseCode})
        await mongoose.connection.close()
        return NextResponse.json({ result: {'id':newRequest.id,'name':"New Request",'response':newRequest,"editMode":false} }, { status: 201 })
    } catch (err) {
        console.error(err)
        await mongoose.connection.close()
        return NextResponse.json({ message: "Failed to send message " }, { status: 400 })
    }
}
