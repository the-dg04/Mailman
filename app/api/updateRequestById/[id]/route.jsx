import { connectToMongo } from "@/libs/mongo.lib";
import RequestsModel from "@/models/requestsModel";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request,{params}) {
    try {
        const body=await request.json()
        await connectToMongo()
        const allRequests=await RequestsModel.updateOne({_id:params.id},{$set:body})
        await mongoose.connection.close()
        return NextResponse.json({message:`updated ${params.id} successfully`}, { status: 200 })
    } catch (err) {
        console.error(err)
        await mongoose.connection.close()
        return NextResponse.json({ message: "Failed to send message " }, { status: 400 })
    }
}