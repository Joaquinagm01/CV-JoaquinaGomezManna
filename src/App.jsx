import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Mail, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

export default function PortfolioCV() {
  const [lang, setLang] = useState("es");

  const translations = {
    es: {
      profile: "Estudiante avanzada de Ingeniería en Sistemas con experiencia en soporte informático y desarrollo de aplicaciones. Me especializo en resolución de problemas técnicos, implementación de soluciones de software y atención a usuarios.",
      experience: "Experiencia Profesional",
      education: "Educación",
      projects: "Proyectos",
      skills: "Habilidades Técnicas",
      languages: "Idiomas",
      download: "Descargar CV",
    },
    en: {
      profile: "Advanced Systems Engineering student with experience in IT support and software development. Skilled in troubleshooting, software implementation, and user assistance.",
      experience: "Professional Experience",
      education: "Education",
      projects: "Projects",
      skills: "Technical Skills",
      languages: "Languages",
      download: "Download CV",
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-10">
          <h1 className="text-4xl font-bold">Joaquina Gómez Manna</h1>
          <p className="text-gray-600 mt-2">Estudiante de Ingeniería en Sistemas | IT Support | Web Developer</p>

          {/* Buttons */}
          <div className="flex gap-4 justify-center mt-4">
            <Button onClick={() => setLang("es")} variant={lang === "es" ? "default" : "outline"}>ES</Button>
            <Button onClick={() => setLang("en")} variant={lang === "en" ? "default" : "outline"}>EN</Button>
          </div>

          <div className="flex gap-4 justify-center mt-4">
            <Button variant="outline"><Mail className="w-4 h-4 mr-2" /> Contacto</Button>
            <Button variant="outline"><Linkedin className="w-4 h-4 mr-2" /> LinkedIn</Button>
            <Button variant="outline"><Github className="w-4 h-4 mr-2" /> GitHub</Button>
            <Button><Download className="w-4 h-4 mr-2" /> {translations[lang].download}</Button>
          </div>
        </motion.div>

        {/* Profile */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">Perfil</h2>
            <p>{translations[lang].profile}</p>
          </CardContent>
        </Card>

        {/* Experience */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">{translations[lang].experience}</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><b>Soporte Informático – ACA (2025 - Actualidad):</b> Nivel 1 de asistencia técnica, Help Desk, infraestructura.</li>
              <li><b>Soporte Informático – Tribunal de Faltas (2024 - 2025):</b> Mantenimiento de sistemas, capacitación de usuarios, testing.</li>
              <li><b>Asistente Administrativo y Soporte – Gómez & Manna SRL (2019 - 2024):</b> Soporte en sistemas y tareas administrativas.</li>
            </ul>
          </CardContent>
        </Card>

        {/* Education */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">{translations[lang].education}</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><b>Universidad Tecnológica de Rosario (2020 - actual):</b> Ingeniería en Sistemas (3er año).</li>
              <li><b>Escuela Superior de Comercio Libertador General San Martín (2015 - 2019):</b> Bachiller en Economía.</li>
            </ul>
          </CardContent>
        </Card>

        {/* Projects */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">{translations[lang].projects}</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><b>Sistema de Hospital (2020):</b> Registro y búsqueda de pacientes en Python.</li>
              <li><b>Sistema de Boletos de Vuelos (2023):</b> Gestión de boletos en Smalltalk (POO).</li>
              <li><b>Prototipo Restaurante (2024):</b> Prototipo en Axure RP9 para gestión de pedidos y pagos.</li>
            </ul>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">{translations[lang].skills}</h2>
            <p>Python, JavaScript, TypeScript, React, Node.js, Smalltalk, MySQL, MikroOrm, Git/GitHub, Linux, Windows, Office 365, Jira, ActiveDirectory, Citrix.</p>
          </CardContent>
        </Card>

        {/* Languages */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">{translations[lang].languages}</h2>
            <ul className="list-disc pl-6">
              <li>Español: Nativo</li>
              <li>Inglés: Intermedio-Avanzado (70%)</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
