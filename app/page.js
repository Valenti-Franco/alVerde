
"use client"
import Image from "next/image";
import logo from "../public/logo.webp"
import { Accordion, AccordionItem, Autocomplete, AutocompleteItem, Avatar, Button, CalendarDate, DateInput, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";

import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue } from "@nextui-org/react";


export default function Home() {

  const statusColorMap = {
    active: "success",
    paused: "danger",
    vacation: "warning",
  };
  const { isOpen, onOpen, onOpenChange } = useDisclosure();


  const personas = [
    { "name": "Juan Perez" },
    { "name": "Pepe Martinez" },
    { "name": "Jorge Gonzales" },
    { "name": "Carlos Ramirez" },
    { "name": "Maria Lopez" },
    { "name": "Ana Torres" },
    { "name": "Pedro Sanchez" }
  ]


  return (
    <main className="flex dark max-w-[1600px]  bg-zinc-800 m-auto min-h-screen   ">
      <div className="min-h-screen  w-1/3 flex flex-col items-center justify-center">
        <div className=" p-6 w-full flex justify-center " >

          <Avatar className="w-40 h-40" src={logo.src} />
        </div>
        <div className=" flex  flex-col p-6 w-full text-white h-full ">
          <p>Bienvenido <b>JUAN</b> </p>
          <p className=" cursor-pointer hover:text-red-300  self-end underline text-zinc-300 text-sm">Cerrar sesión</p>

          <div className=" my-8 flex flex-col">

            <p className="font-extrabold text-xl border-b  text-center p-2 m-2">Crear Piloto</p>


            <Input className=" my-2" type="text" variant={"bordered"} label="Nombre Completo" />


            <DateInput className=" my-2" variant={"bordered"} label={"Fecha Nacimiento"} />

            <Input type="number" className=" my-2" variant={"bordered"} label="Número Télefono" />

            <Input className=" my-2" type="text" variant={"bordered"} label="Instagram" />


            <Button color="primary">GUARDAR</Button>




          </div>


          <div className=" my-8 flex flex-col">

            <p className="font-extrabold text-xl border-b  text-center p-2 m-2">Crear Fecha de Evento</p>





            <DateInput className=" my-2" variant={"bordered"} label={"Fecha del Evento"} />




            <Button color="primary">GUARDAR</Button>




          </div>
        </div>
      </div>
      <div className=" bg-zinc-600 w-full text-white min-h-screen ">
        <div className=" flex bg-zinc-700 mb-8  justify-around ">
          <svg className="w-12" fill="#fff" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.000,32.000 C7.178,32.000 -0.000,24.822 -0.000,16.000 C-0.000,7.178 7.178,-0.000 16.000,-0.000 C24.822,-0.000 32.000,7.178 32.000,16.000 C32.000,24.822 24.822,32.000 16.000,32.000 ZM16.000,2.000 C8.280,2.000 2.000,8.280 2.000,16.000 C2.000,23.720 8.280,30.000 16.000,30.000 C23.720,30.000 30.000,23.720 30.000,16.000 C30.000,8.280 23.720,2.000 16.000,2.000 ZM23.000,17.000 L11.414,17.000 L13.707,19.293 C14.098,19.684 14.098,20.316 13.707,20.707 C13.512,20.902 13.256,21.000 13.000,21.000 C12.744,21.000 12.488,20.902 12.293,20.707 L8.293,16.707 C8.201,16.615 8.128,16.505 8.077,16.382 C7.976,16.138 7.976,15.862 8.077,15.618 C8.128,15.495 8.201,15.385 8.293,15.293 L12.293,11.293 C12.684,10.902 13.316,10.902 13.707,11.293 C14.098,11.684 14.098,12.316 13.707,12.707 L11.414,15.000 L23.000,15.000 C23.552,15.000 24.000,15.448 24.000,16.000 C24.000,16.552 23.552,17.000 23.000,17.000 Z"></path> </g></svg>
          <p className="  font-extrabold text-3xl text-center p-2 m-2">15/6/24</p>
          <svg className="w-12" fill="#fff" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.000,32.000 C7.178,32.000 -0.000,24.822 -0.000,16.000 C-0.000,7.178 7.178,-0.000 16.000,-0.000 C24.822,-0.000 32.000,7.178 32.000,16.000 C32.000,24.822 24.822,32.000 16.000,32.000 ZM16.000,2.000 C8.280,2.000 2.000,8.280 2.000,16.000 C2.000,23.720 8.280,30.000 16.000,30.000 C23.720,30.000 30.000,23.720 30.000,16.000 C30.000,8.280 23.720,2.000 16.000,2.000 ZM23.000,17.000 L11.414,17.000 L13.707,19.293 C14.098,19.684 14.098,20.316 13.707,20.707 C13.512,20.902 13.256,21.000 13.000,21.000 C12.744,21.000 12.488,20.902 12.293,20.707 L8.293,16.707 C8.201,16.615 8.128,16.505 8.077,16.382 C7.976,16.138 7.976,15.862 8.077,15.618 C8.128,15.495 8.201,15.385 8.293,15.293 L12.293,11.293 C12.684,10.902 13.316,10.902 13.707,11.293 C14.098,11.684 14.098,12.316 13.707,12.707 L11.414,15.000 L23.000,15.000 C23.552,15.000 24.000,15.448 24.000,16.000 C24.000,16.552 23.552,17.000 23.000,17.000 Z"></path> </g></svg>
        </div>


        <div className=" flex   flex-col">

          <h1 className=" font-extrabold text-xl border-b  text-center p-2 m-2">SELECCIONAR TIEMPO</h1>
          <div className=" flex justify-around ">
            <p className="font-extrabold cursor-pointer bg-gray-700 text-xl text-center border rounded-md p-12 m-3">10.00 seg</p>
            <p className="font-extrabold cursor-pointer text-xl text-center hover:bg-gray-500  rounded-md p-12 m-3">20.00 seg</p>
            <p className="font-extrabold cursor-pointer  text-xl text-center hover:bg-gray-500  rounded-md p-12 m-3">30.00 seg</p>
            <p className="font-extrabold cursor-pointer  text-xl text-center hover:bg-gray-500  rounded-md p-12 m-3">40.00 seg</p>

          </div>
          <div className=" flex justify-around ">
            <p className="font-extrabold cursor-pointer hover:bg-gray-500 text-xl text-center  rounded-md p-12 m-3">50.00 seg</p>
            <p className="font-extrabold cursor-pointer text-xl text-center hover:bg-gray-500  rounded-md p-12 m-3">60.00 seg</p>
            <p className="font-extrabold cursor-pointer  text-xl text-center hover:bg-gray-500  rounded-md p-12 m-3">70.00 seg</p>

          </div>
          {/* <Button className=" m-auto" color="primary">
            Agregar Piloto y Tiempo
          </Button> */}


          <div
            className="w-3/4 m-auto"
          >


            <h1 className="  font-extrabold text-3xl text-center p-2 mt-12">CLASIFICACION</h1>
            <Table aria-label="Example table with custom cells">
              <TableHeader >

                <TableColumn  >
                  Nombre Completo Piloto
                </TableColumn>
                <TableColumn  >
                  Nº Auto
                </TableColumn>
                <TableColumn  >
                  Tiempo
                </TableColumn>

              </TableHeader>
              <TableBody >

                <TableRow className=" bg-green-900 " >
                  <TableCell>Juan Perez</TableCell>
                  <TableCell>1</TableCell>
                  <TableCell>8.456</TableCell>
                </TableRow>

                <TableRow >
                  <TableCell>Pepe Martinez</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>+0.256</TableCell>
                </TableRow>


                <TableRow >
                  <TableCell>Jorge Gonzales</TableCell>
                  <TableCell>3</TableCell>
                  <TableCell>+1.056</TableCell>
                </TableRow>


                <TableRow>
                  <TableCell>Maria Lopez</TableCell>
                  <TableCell>4</TableCell>
                  <TableCell>+1.145</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Ana Torres</TableCell>
                  <TableCell>5</TableCell>
                  <TableCell>+1.289</TableCell>
                </TableRow>
                <TableRow className="bg-red-900">
                  <TableCell>Carlos Ramirez</TableCell>
                  <TableCell>6</TableCell>
                  <TableCell>Descalificado</TableCell>
                </TableRow>
                <TableRow className="bg-red-500">
                  <TableCell>Pedro Sanchez</TableCell>
                  <TableCell>7</TableCell>
                  <TableCell>Descalificado</TableCell>
                </TableRow>



              </TableBody>
            </Table>
            <Button onPress={onOpen} className=" self-end  m-4">AGREGAR PILOTO</Button>

          </div>


          <div
            className="w-3/4 m-auto"
          >


            <h1 className="  font-extrabold text-3xl text-center p-2 mt-12">REPECHAJE</h1>
            <Table aria-label="Example table with custom cells">
              <TableHeader >

                <TableColumn  >
                  Nombre Completo Piloto
                </TableColumn>
                <TableColumn  >
                  Nº Auto
                </TableColumn>
                <TableColumn  >
                  Tiempo
                </TableColumn>

              </TableHeader>
              <TableBody >

                <TableRow className=" bg-green-900 " >
                  <TableCell>Juan Perez</TableCell>
                  <TableCell>1</TableCell>
                  <TableCell>7.776</TableCell>
                </TableRow>

                <TableRow >
                  <TableCell>Pepe Martinez</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>+0.256</TableCell>
                </TableRow>


                <TableRow >
                  <TableCell>Jorge Gonzales</TableCell>
                  <TableCell>3</TableCell>
                  <TableCell>+1.056</TableCell>
                </TableRow>


                <TableRow>
                  <TableCell>Maria Lopez</TableCell>
                  <TableCell>4</TableCell>
                  <TableCell>+1.145</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Ana Torres</TableCell>
                  <TableCell>5</TableCell>
                  <TableCell>+1.289</TableCell>
                </TableRow>
                <TableRow className="bg-red-900">
                  <TableCell>Carlos Ramirez</TableCell>
                  <TableCell>6</TableCell>
                  <TableCell>Descalificado</TableCell>
                </TableRow>




              </TableBody>
            </Table>
            <Button onPress={onOpen} className=" self-end  m-4">AGREGAR PILOTO</Button>

          </div>

          <div
            className="w-3/4 m-auto"
          >


            <h1 className="  font-extrabold text-3xl text-center p-2 mt-12">ELIMINATORIAS</h1>
            <Table aria-label="Example table with custom cells">
              <TableHeader >

                <TableColumn  >
                  Nombre Completo Piloto
                </TableColumn>
                <TableColumn  >
                  Nº Auto
                </TableColumn>
                <TableColumn  >
                  Tiempo
                </TableColumn>

              </TableHeader>
              <TableBody >

                <TableRow className=" bg-green-900 " >
                  <TableCell>Juan Perez</TableCell>
                  <TableCell>1</TableCell>
                  <TableCell>7.456</TableCell>
                </TableRow>

                <TableRow >
                  <TableCell>Pepe Martinez</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>+0.256</TableCell>
                </TableRow>


                <TableRow >
                  <TableCell>Jorge Gonzales</TableCell>
                  <TableCell>3</TableCell>
                  <TableCell>+1.056</TableCell>
                </TableRow>


                <TableRow>
                  <TableCell>Maria Lopez</TableCell>
                  <TableCell>4</TableCell>
                  <TableCell>+1.145</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Ana Torres</TableCell>
                  <TableCell>5</TableCell>
                  <TableCell>+1.289</TableCell>
                </TableRow>
                <TableRow className="bg-red-900">
                  <TableCell>Carlos Ramirez</TableCell>
                  <TableCell>6</TableCell>
                  <TableCell>Descalificado</TableCell>
                </TableRow>
                <TableRow className="bg-red-500">
                  <TableCell>Pedro Sanchez</TableCell>
                  <TableCell>7</TableCell>
                  <TableCell>Descalificado</TableCell>
                </TableRow>



              </TableBody>
            </Table>
            <Button onPress={onOpen} className=" self-end  m-4">AGREGAR PILOTO</Button>
            <Modal
              backdrop="opaque"
              isOpen={isOpen}
              className="dark"
              onOpenChange={onOpenChange}
              classNames={{

                backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
              }}
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                    <ModalBody className="text-white">
                      <div className=" my-8 flex flex-col">

                        <p className="font-extrabold text-xl border-b  text-center p-2 m-2">Agregar un Piloto</p>

                        <Autocomplete
                          label="Selecciona un Piloto"
                          className="my-4 dark"
                        >
                          {personas.map((person) => (
                            <AutocompleteItem className="dark" key={person.name} value={person.name}>
                              {person.name}
                            </AutocompleteItem>
                          ))}
                        </Autocomplete>



                        <Input type="number" className=" my-4" variant={"bordered"} label="Tiempo Logrado" />







                      </div>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Cancelar
                      </Button>
                      <Button color="primary" onPress={onClose}>
                        Agregar
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </div>

        </div>
      </div>

    </main>
  );
}
