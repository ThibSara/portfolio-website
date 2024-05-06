//import {EmailTemplate} from '../../../components/emailTemplate'
import {NextResponse} from 'next/server';
import {Resend} from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
    try{
        const data = await resend.emails.send({
            from: 'Sara <sara.thibierge@gmail.com>',
            to: 'sara.thibierge@gmail.com',
            subject: 'Hello World',
            react: <p>Email Body</p>,
        });
        return NextResponse.json(data);

    }
    catch(error){
        return NextResponse.error(error);
    }
}