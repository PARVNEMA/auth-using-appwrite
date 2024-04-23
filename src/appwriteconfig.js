//src/appwriteConfig.js
import { Client, Account } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66273fbae16bf0aaf54f');

export const account = new Account(client);

export default client;
