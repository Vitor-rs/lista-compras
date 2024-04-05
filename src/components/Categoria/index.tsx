import { Badge } from "lucide-react";
import { Button } from "react-daisyui";


function Categoria() {



    return (
        <>

            <Button>
                Inbox
                <Badge >+99</Badge>
            </Button>
            <Button>
                Inbox
                <Badge  color="secondary">
                    +99
                </Badge>
            </Button>



        </>
    );
}

export default Categoria;