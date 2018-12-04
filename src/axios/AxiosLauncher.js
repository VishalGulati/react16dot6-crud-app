import axios from 'axios';

export const baseURL = `https://firestore.googleapis.com/v1beta1/projects/angular-task-e7f39/databases/(default)/documents/tasks`;

export const API = axios.create({
    baseURL: baseURL
});
