export class AdminTender{
    constructor(
        public tenderType: string,
        public title: string,
        public reference: string,
        public description: string,
        public status: string,
        public documentPath: string,
        public DateOpenend: Date,
        public DateClosed: Date,
       
    ){}
    

}