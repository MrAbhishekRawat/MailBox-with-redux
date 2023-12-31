import axios from "axios";
import { formatEmail } from "./HelperFunctions";



export const sentForInbox = async ({ toEmail, data }) => {
    const formattedEmail = await formatEmail(toEmail)
    try {
        const res = await axios.post(
            `https://mailboxredux-default-rtdb.asia-southeast1.firebasedatabase.app//${formattedEmail}/inbox.json`,
            {
                data
            }
        );
        return res.data;
    } catch (error) {
        return error;
    }  
}

export const sentForSentbox = async ({ fromEmail, data }) => {
    const formattedEmail = await formatEmail(fromEmail)
    try {
        const res = await axios.post(
            `https://mailboxredux-default-rtdb.asia-southeast1.firebasedatabase.app//${formattedEmail}/sent.json`,
            {
                data
            }
        );
        return res.data;
    } catch (error) {
        return error;
    }
}

export const gettingRecivedEmails = async (fromEmail) => {
    const formattedEmail = await formatEmail(fromEmail)
    try {
        const res = await axios.get(
            `https://mailboxredux-default-rtdb.asia-southeast1.firebasedatabase.app//${formattedEmail}/inbox.json`);
            
        return res.data;
    } catch (error) {
        return error;
    }
}

export const gettingSentEmails = async (fromEmail) => {
    const formattedEmail = await formatEmail(fromEmail)
    try {
        const res = await axios.get(
            `https://mailboxredux-default-rtdb.asia-southeast1.firebasedatabase.app//${formattedEmail}/sent.json`);
        return res.data;
    } catch (error) {
        return error;
    }
}

export const gettingInboxSingleEmail = async ({email, id}) => {
    const formattedEmail = await formatEmail(email)
    try {
        const res = await axios.get(
            `https://mailboxredux-default-rtdb.asia-southeast1.firebasedatabase.app//${formattedEmail}/inbox/${id}.json`);
            return res.data;
    } catch (error) {
        return error;
    }
}

export const gettingSentSingleEmail = async ({email, id}) => {
    const formattedEmail = await formatEmail(email)
    try {
        const res = await axios.get(
            `https://mailboxredux-default-rtdb.asia-southeast1.firebasedatabase.app//${formattedEmail}/sent/${id}.json`);
            return res.data;
    } catch (error) {
        return error;
    }
}

export const isReadEmaiHandler = async ({email, id, data}) => {
    const formattedEmail = await formatEmail(email)
    try {
        const res = await axios.put(
            `https://mailboxredux-default-rtdb.asia-southeast1.firebasedatabase.app//${formattedEmail}/inbox/${id}.json`,{
                data
            });
            return res.data;
    } catch (error) {
        return error;
    }
}

export const deleteMail = async ({ email, id }) => {
    const formattedEmail = await formatEmail(email)
    try {
        const res = await axios.delete(
            `https://mailboxredux-default-rtdb.asia-southeast1.firebasedatabase.app//${formattedEmail}/inbox/${id}.json`);
        return res;
    } catch (error) {
        return error;
    }
}



