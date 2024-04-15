import { connectToMongo } from "@/libs/mongo.lib";
import RequestsModel from "@/models/requestsModel";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
export const dynamic = 'force-dynamic';
export async function GET(request,{params}) {
    try {
        await connectToMongo()
        const requestById=await RequestsModel.find({_id:params.id})
        await mongoose.connection.close()
        return NextResponse.json({result:requestById[0]}, { status: 200 })
    } catch (err) {
        console.error(err)
        await mongoose.connection.close()
        return NextResponse.json({ message: "Failed to send message " }, { status: 400 })
    }
}