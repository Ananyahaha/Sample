export class Product {
        id:number;
        name:string;
        description: string;
        price: number;
        imageUrl: string;
    
        constructor (id: number,name: string,description="",price=0,imageUrl="https://m.media-amazon.com/images/I/81YSIX3gYaL._AC_UL480_FMwebp_QL65_.jpg")
        {
            this.id=id;
            this.name=name;
            this.description=description;
            this.price=price;
            this.imageUrl=imageUrl;
    
        }
    }

    
    
    
    

