import { connectToMongo } from "@/libs/mongo.lib";
import RequestsModel from "@/models/requestsModel";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request,{params}) {
    try {
        await connectToMongo()
        const allRequests=await RequestsModel.findByIdAndDelete(params.id)
        await mongoose.connection.close()
        return NextResponse.json({message:`deleted ${params.id} successfully`}, { status: 200 })
    } catch (err) {
        console.error(err)
        await mongoose.connection.close()
        return NextResponse.json({ message: "Failed to send message " }, { status: 400 })
    }
}