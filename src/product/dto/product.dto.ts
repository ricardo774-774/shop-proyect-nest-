export class CreateProductDto {
    readonly name: string;
    readonly imageURL: string;
    readonly description: string;
    readonly availability: boolean;
    readonly price: number;
    readonly date: Date;
}
