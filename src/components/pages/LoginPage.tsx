import React, { useState } from 'react';
import { User, Lock, Eye, EyeOff } from 'lucide-react';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAuth } from '../../hooks/useAuth';
import { authService } from '../../api/auth';
import logo from '../../assets/soluciones-logo.png';
import handshake from '../../assets/login-image.jpg';

// Esquema de validación con Yup
const schema = yup.object({
  email: yup.string()
    .email('Debe ser un correo electrónico válido')
    .required('El correo es obligatorio'),
  password: yup.string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .required('La contraseña es obligatoria'),
}).required();

interface LoginFormInputs {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const { loginUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    setLoading(true);
    setErrorMsg('');
    try {
      const response = await authService.login({ username: data.email, password: data.password });
      loginUser(response.data);
    } catch (error: any) {
      const status = error.response?.status;
      let msg = 'Error al iniciar sesión';
      if (status === 401 || status === 403) {
        msg = 'Correo o contraseña incorrectos';
      } else if (status >= 500) {
        msg = 'Servicio temporalmente no disponible';
      }
      setErrorMsg(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-2 sm:p-4 overflow-hidden">
      <div className="bg-white rounded-xl lg:rounded-2xl shadow-2xl overflow-hidden w-full max-w-5xl h-full max-h-[95vh] flex">
        {/* Formulario de Login */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <div className="flex-1 p-4 sm:p-6 lg:p-8 flex flex-col justify-center overflow-y-auto">
            <div className="max-w-md mx-auto w-full space-y-4 sm:space-y-6">
              {/* Logo */}
              <div className="flex justify-center">
                <img src={logo} alt="Logo Soluciones" className="h-12 sm:h-14 lg:h-16 object-contain" />
              </div>

              {/* Título */}
              <div className="text-center">
                <h2 className="text-xl sm:text-2xl font-bold text-[#56B167] mb-1 sm:mb-2">Login</h2>
                <p className="text-gray-600 text-sm sm:text-base">Inicia sesión en tu cuenta</p>
              </div>

              {/* Mensaje de Error General */}
              {errorMsg && (
                <div className="bg-red-100 border border-red-300 text-red-700 p-2 sm:p-3 rounded-lg text-sm text-center">
                  {errorMsg}
                </div>
              )}

              {/* Errores de Validación */}
              {errors.email && (
                <div className="bg-red-100 border border-red-300 text-red-700 p-2 sm:p-3 rounded-lg text-sm text-center">
                  {errors.email.message}
                </div>
              )}
              {errors.password && (
                <div className="bg-red-100 border border-red-300 text-red-700 p-2 sm:p-3 rounded-lg text-sm text-center">
                  {errors.password.message}
                </div>
              )}

              {/* Formulario */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">
                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Correo electrónico
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                    <input
                      {...register('email')}
                      className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#56B167] focus:border-transparent transition-all"
                      placeholder="usuario@ejemplo.com"
                    />
                  </div>
                </div>

                {/* Contraseña */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Contraseña
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                    <input
                      {...register('password')}
                      type={showPassword ? 'text' : 'password'}
                      className="w-full pl-9 sm:pl-10 pr-11 sm:pr-12 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#56B167] focus:border-transparent transition-all"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" /> : <Eye className="w-4 h-4 sm:w-5 sm:h-5" />}
                    </button>
                  </div>
                </div>

                {/* Botón de Login */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full bg-gradient-to-r from-[#56B167] to-[#479254] text-white py-2.5 sm:py-3 px-4 rounded-lg font-semibold text-sm sm:text-base hover:from-[#479254] hover:to-[#367244] focus:outline-none focus:ring-2 focus:ring-[#56B167] focus:ring-offset-2 transform transition-all duration-200 hover:scale-105 ${
                    loading ? 'opacity-60 cursor-not-allowed' : ''
                  }`}
                >
                  {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Imagen - Solo visible en desktop */}
        <div className="hidden lg:flex lg:w-1/2 relative">
          <img
            src={handshake}
            alt="Handshake"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-[#56B167]/70 flex items-center justify-center p-6">
            <div className="text-center text-white max-w-md">
              <h3 className="text-xl xl:text-2xl font-bold mb-4">
                Evalúa y mejora el <span className="text-yellow-400">talento de tu equipo</span> desde cualquier lugar
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;