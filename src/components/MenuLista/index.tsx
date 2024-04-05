import { Input } from "react-daisyui";

function MenuLista() {
  return (
    <>

        

          <div className="
            flex
            flex-col

            items-start
            bg-base-300
            p-4
            space-y-4
          ">

              <h1 className="
                text-2xl
                font-semibold
                text-center
              ">Lista de compras</h1>

              <div className="form-control w-full max-w-xs">
                
                  <div>
                      <label className="label">
                          <span className="
                            label-text
                            text-neutral-900
                            text-lg
                            font-semibold
                          ">Item</span>
                      </label>
                      <Input
                        bordered={true}
                        placeholder="Digite o item"
                        color="neutral"
                      />
                  </div>

                
                  

              </div>



          </div>


    
    </>
  );
}

export default MenuLista;