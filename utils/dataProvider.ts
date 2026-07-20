import fs from 'fs'; 
import {parse} from 'csv-parse/sync';

export class dataProvider 
{ //read the json file and return the data as an object
    static getTestDataFromJson(filePath: string): any
    {
        let data:string = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        return data;
    }


//read the csv file and return the data as an array of objects
    static getTestDataFromCsv(filePath: string): any[]
    {
            let data = parse(fs.readFileSync(filePath),{columns: true, skip_empty_lines: true});
            return data;
    }
}