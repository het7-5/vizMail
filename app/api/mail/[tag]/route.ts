import { NextResponse } from 'next/server'
import axios from 'axios'
import { Timestamp } from 'next/dist/server/lib/cache-handlers/types';
import { db } from "@/db/index";
import { emailTable } from "@/db/schema";

interface Email {
    id: string,
    sender: string,
    receiver: string,
    senderName: string,
    body: string,
    tag: string,
    time: string,
    subject: string
}
export async function GET(
    request: Request,
    { params }: { params: { tag: any } }
) {
    try {

        const res = await axios.get('https://api.testmail.app/api/json', {
            params: {
                apikey: process.env.MAIL_KEY,
                namespace: 'biscw'
            }
        });

        if (res.status === 200) {
            const emails = res.data.emails

            const formattedEmails: Email[] = emails.map((email: any) => ({
                id: email.id,
                sender: email.from_parsed[0].address,
                receiver: email.to,
                senderName: email.from_parsed[0].name,
                body: email.text || email.html || '',
                tag: email.tag,
                time: email.timestamp.toString(),
                subject: email.subject
            }));

            const db_insert = await db.insert(emailTable).values(formattedEmails);
            return NextResponse.json(db_insert)

        }


    } catch (error) {
        console.error('Error fetching issue:', error)
        return NextResponse.json(
            { error: 'Failed to fetch issue' },
            { status: 500 }
        )
    }
}