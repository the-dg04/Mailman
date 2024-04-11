"use client";
import Editor from "@monaco-editor/react";
import { useState } from "react";

export default function useBody(){
    const [body,setBody]=useState();
    const bodyComponent=<Editor height="20vh" width="50vw" defaultLanguage="json" value={body} onChange={(e)=>{setBody(e)}}/>
    return([bodyComponent,body]
    );
}