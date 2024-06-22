"use client";
import React, { useRef, useState } from "react";
import moto from "../../public/moto.png";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const page = () => {
  const usernameRef = useRef();
  const Pass1 = useRef();
  const PassRepeat = useRef();
  const router = useRouter();
  const [isLoggin, setisLoggin] = useState(true);
  const [error, seterror] = useState(false);
  const [isShown, setisShown] = useState(false);

  const handlerChange = () => {
    setisLoggin(!isLoggin);

    usernameRef.current.value = "";
    Pass1.current.value = "";
    if (PassRepeat.current) {
      PassRepeat.current.value = "";
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = Pass1.current.value;
    // const formdata = new FormData(e.currentTarget)
    if (isLoggin) {
      // Intento de inicio de sesión
      const result = await signIn("credentials", {
        redirect: false,
        username: username,
        password: password,
      });

      if (result.error) {
        toast.error("Credenciales inválidas", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        toast.success("Inicio de sesión exitoso", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setTimeout(() => router.push("/"), 400);
      }
    } else {
      const password2 = PassRepeat.current.value;
      console.log(password.length);
      if (password.length <= 7) {
        seterror("La contraseña debe tener almenos 8 caracteres");

        return toast.error(
          error || "La contraseña debe tener almenos 8 caracteres",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            // transition: Bounce,
          }
        );
      }
      if (password !== password2) {
        seterror("La contraseña deben ser iguales");

        return toast.error(error || "La contraseña deben ser iguales", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          // transition: Bounce,
        });
      }

      try {
        const resSignup = await axios.post("api/auth/signup", {
          username: username,
          password: password,
        });
        if (resSignup.status === 200) {
          toast.success("Usuario Registrado Correctamente", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });

          console.log(
            resSignup.data.data.username,
            resSignup.data.data.password
          );

          // const res = await signIn("credentials", {
          //   redirect: false,
          //   username: resSignup.data.data.username,
          //   password: password,
          // });

          // usernameRef.current.value = "";
          Pass1.current.value = "";
          PassRepeat.current.value = "";
          // console.log(res);
          setisLoggin(true);
        }
      } catch (error) {
        console.log(error);
        console.log(error.response.data);
        seterror(error.response.data.message);
        toast.error(error.response.data.message);
      }
      // console.log(username, password);
    }
    // axios
    //  .post("http://localhost:3000/api/login", {
    //     username: username,
    //     password: 123,
    //   })
    //  .then((response) => {
    //     console.log(response);
    //   })
    //  .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <>
      <div class="bg-zinc-800 flex text-white justify-center items-center h-screen">
        <div class="w-1/2 h-screen hidden lg:block">
          <img
            src={moto.src}
            alt="Placeholder Image"
            class="object-cover w-full h-full"
          />
        </div>
        <div class="lg:p-36 md:p-52  sm:20 p-8 w-full lg:w-1/2">
          <h1 class="text-2xl font-semibold mb-4">
            {isLoggin ? <p>Iniciar Sesión</p> : <p>Registrarse</p>}
          </h1>
          <form action="#" method="POST">
            <div class="mb-4">
              <label for="username" class="block text-gray-200">
                Nombre de Usuario
              </label>
              <input
                ref={usernameRef}
                type="text"
                id="username"
                name="username"
                class="w-full  border-4  border-sky-600 text-black  rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                // class="w-full border border-gray-30 text-black rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autocomplete="off"
              />
            </div>
            <div class="mb-4">
              <label for="password" class="block text-gray-200">
                Contraseña
              </label>
              <div className="relative flex items-center">
                <input
                  ref={Pass1}
                  type={isShown ? "text" : "password"}
                  id="password"
                  name="password"
                  class="w-full  border-4  border-sky-600 text-black rounded-r-none rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  autocomplete="off"
                />
                <div
                  onClick={() => setisShown(!isShown)}
                  className="   bg-sky-600 p-3 rounded-xl rounded-l-none  "
                >
                  {isShown ? (
                    <motion.svg
                      whileHover={{
                        scale: 1.2, // Escalar el elemento al 120% de su tamaño original
                        transition: {
                          type: "spring",
                          stiffness: 500, // Rigidez del resorte
                          damping: 10, // Amortiguación del resorte
                        },
                      }}
                      className=" cursor-pointer w-10 h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M12 16.01C14.2091 16.01 16 14.2191 16 12.01C16 9.80087 14.2091 8.01001 12 8.01001C9.79086 8.01001 8 9.80087 8 12.01C8 14.2191 9.79086 16.01 12 16.01Z"
                          stroke="#fff"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                        <path
                          d="M2 11.98C8.09 1.31996 15.91 1.32996 22 11.98"
                          stroke="#fff"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                        <path
                          d="M22 12.01C15.91 22.67 8.09 22.66 2 12.01"
                          stroke="#fff"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                      </g>
                    </motion.svg>
                  ) : (
                    <motion.svg
                      whileHover={{
                        scale: 1.2, // Escalar el elemento al 120% de su tamaño original
                        transition: {
                          type: "spring",
                          stiffness: 500, // Rigidez del resorte
                          damping: 10, // Amortiguación del resorte
                        },
                      }}
                      className=" w-10 h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M14.83 9.17999C14.2706 8.61995 13.5576 8.23846 12.7813 8.08386C12.0049 7.92926 11.2002 8.00851 10.4689 8.31152C9.73758 8.61453 9.11264 9.12769 8.67316 9.78607C8.23367 10.4444 7.99938 11.2184 8 12.01C7.99916 13.0663 8.41619 14.08 9.16004 14.83"
                          stroke="#fff"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                        <path
                          d="M12 16.01C13.0609 16.01 14.0783 15.5886 14.8284 14.8384C15.5786 14.0883 16 13.0709 16 12.01"
                          stroke="#fff"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                        <path
                          d="M17.61 6.39004L6.38 17.62C4.6208 15.9966 3.14099 14.0944 2 11.99C6.71 3.76002 12.44 1.89004 17.61 6.39004Z"
                          stroke="#fff"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                        <path
                          d="M20.9994 3L17.6094 6.39"
                          stroke="#fff"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                        <path
                          d="M6.38 17.62L3 21"
                          stroke="#fff"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                        <path
                          d="M19.5695 8.42999C20.4801 9.55186 21.2931 10.7496 21.9995 12.01C17.9995 19.01 13.2695 21.4 8.76953 19.23"
                          stroke="#fff"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                      </g>
                    </motion.svg>
                  )}
                </div>
              </div>
            </div>
            {!isLoggin && (
              <div class="mb-4">
                <label for="password" class="block text-gray-200">
                  Repite tu contraseña
                </label>
                <div className="relative flex items-center">
                  <input
                    ref={PassRepeat}
                    type={isShown ? "text" : "password"}
                    id="password"
                    name="password"
                    class="w-full  border-4  border-sky-600 text-black rounded-r-none rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                    autocomplete="off"
                  />
                  <div
                    onClick={() => setisShown(!isShown)}
                    className="   bg-sky-600 p-3 rounded-xl rounded-l-none  "
                  >
                    {isShown ? (
                      <motion.svg
                        whileHover={{
                          scale: 1.2, // Escalar el elemento al 120% de su tamaño original
                          transition: {
                            type: "spring",
                            stiffness: 500, // Rigidez del resorte
                            damping: 10, // Amortiguación del resorte
                          },
                        }}
                        className=" cursor-pointer w-10 h-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M12 16.01C14.2091 16.01 16 14.2191 16 12.01C16 9.80087 14.2091 8.01001 12 8.01001C9.79086 8.01001 8 9.80087 8 12.01C8 14.2191 9.79086 16.01 12 16.01Z"
                            stroke="#fff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                          <path
                            d="M2 11.98C8.09 1.31996 15.91 1.32996 22 11.98"
                            stroke="#fff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                          <path
                            d="M22 12.01C15.91 22.67 8.09 22.66 2 12.01"
                            stroke="#fff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                        </g>
                      </motion.svg>
                    ) : (
                      <motion.svg
                        whileHover={{
                          scale: 1.2, // Escalar el elemento al 120% de su tamaño original
                          transition: {
                            type: "spring",
                            stiffness: 500, // Rigidez del resorte
                            damping: 10, // Amortiguación del resorte
                          },
                        }}
                        className=" w-10 h-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M14.83 9.17999C14.2706 8.61995 13.5576 8.23846 12.7813 8.08386C12.0049 7.92926 11.2002 8.00851 10.4689 8.31152C9.73758 8.61453 9.11264 9.12769 8.67316 9.78607C8.23367 10.4444 7.99938 11.2184 8 12.01C7.99916 13.0663 8.41619 14.08 9.16004 14.83"
                            stroke="#fff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                          <path
                            d="M12 16.01C13.0609 16.01 14.0783 15.5886 14.8284 14.8384C15.5786 14.0883 16 13.0709 16 12.01"
                            stroke="#fff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                          <path
                            d="M17.61 6.39004L6.38 17.62C4.6208 15.9966 3.14099 14.0944 2 11.99C6.71 3.76002 12.44 1.89004 17.61 6.39004Z"
                            stroke="#fff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                          <path
                            d="M20.9994 3L17.6094 6.39"
                            stroke="#fff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                          <path
                            d="M6.38 17.62L3 21"
                            stroke="#fff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                          <path
                            d="M19.5695 8.42999C20.4801 9.55186 21.2931 10.7496 21.9995 12.01C17.9995 19.01 13.2695 21.4 8.76953 19.23"
                            stroke="#fff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                        </g>
                      </motion.svg>
                    )}
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={(e) => handleRegister(e)}
              type="submit"
              class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
            >
              {isLoggin ? <p>Iniciar Sesión</p> : <p>Registrarse</p>}
            </button>
          </form>
          <div class="mt-6 text-blue-500 text-center">
            <button
              onClick={() => handlerChange()}
              href="#"
              class="hover:underline"
            >
              {!isLoggin ? <p>Iniciar Sesión</p> : <p>Registrarse</p>}
            </button>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default page;
