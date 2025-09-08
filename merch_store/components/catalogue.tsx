import { Card } from "./ui/card";
import {Button} from "./ui/button";

export default function Catalogue() {
    return (
        <div className="font-sans grid grid-rows-[20px_1fr_20px]  justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <div>Catalogue</div>
                <Card className="w-[350px]">
                        <Card className="w-[300px]">
                                <img src="https://www.fuelforfans.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw9ac4d178/images/large/701233014001_pp_01_ferrari.jpg?sw=1316&q=80" alt="" />
                                <h2>PUMA 2025 Lewis Hamilton British GP Cap</h2>
                                <p>Description of Product 1</p>
                                <p>Price: $10.00</p>
                                <Button> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart-icon lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                                Add to cart</Button>

                        </Card>
                        <Card className="w-[300px]">
                                <h2>Product 2</h2>
                                <p>Description of Product 2</p>
                                <p>Price: $51,50</p>
                                <Button> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart-icon lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                                Add to cart</Button>
                        </Card>
                        <Card className="w-[300px]">
                                <h2>Product 3</h2>
                                <p>Description of Product 3</p>
                                <p>Price: $30.00</p>
                                <Button> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart-icon lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                                Add to cart</Button>
                        </Card>
                    </Card>
                </main>
                </div>
    );
}