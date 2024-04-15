import { connectToMongo } from "@/libs/mongo.lib";
import RequestsModel from "@/models/requestsModel";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
export const dynamic = 'force-dynamic';
export async function GET(request) {
    try {
        await connectToMongo()
        const allRequests=await RequestsModel.find()
        await mongoose.connection.close()
        return NextResponse.json({result:allRequests}, { status: 200 })
    } catch (err) {
        console.error(err)
        await mongoose.connection.close()
        return NextResponse.json({ message: "Failed to send message " }, { status: 400 })
    }
}