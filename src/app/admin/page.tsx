"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Briefcase,
  Award,
  MessageSquare,
  Trophy,
} from "lucide-react";

import AdminProjects from "@/components/admin/AdminProjects";

import AdminCertifications from "@/components/admin/AdminCertifications";
import AdminTestimonials from "@/components/admin/AdminTestimonials";
import { useRouter } from "next/navigation";
import AdminExperiences from "@/components/admin/AdminExperiences";

const Admin = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-dark-blue">
      <div className="container-custom section-padding">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gradient mb-2">
              Area Administrativa Portfólio
            </h1>
            <p className="text-gray-400">
              Gerencie os conteúdos do seu portfólio
            </p>
          </div>
          <Button
            onClick={() => router.push("/")}
            variant="secondary"
            className="flex items-center gap-2"
          >
            <ArrowLeft size={18} />
            Voltar ao Site
          </Button>
        </div>

        {/* Admin Tabs */}
        <Tabs defaultValue="projects" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 bg-navy">
            <TabsTrigger
              value="projects"
              className="flex items-center gap-2 data-[state=active]:bg-green-accent data-[state=active]:text-white"
            >
              <Briefcase size={18} />
              Projetos
            </TabsTrigger>
            <TabsTrigger
              value="experiences"
              className="flex items-center gap-2 data-[state=active]:bg-green-accent data-[state=active]:text-white"
            >
              <Award size={18} />
              Experiências
            </TabsTrigger>
            <TabsTrigger
              value="certifications"
              className="flex items-center gap-2 data-[state=active]:bg-green-accent data-[state=active]:text-white"
            >
              <Trophy size={18} />
              Certificações
            </TabsTrigger>
            <TabsTrigger
              value="testimonials"
              className="flex items-center gap-2 data-[state=active]:bg-green-accent data-[state=active]:text-white"
            >
              <MessageSquare size={18} />
              Depoimentos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="projects">
            <Card className="bg-navy border-gray-700">
              <CardHeader>
                <CardTitle className="text-green-accent">
                  Gerenciar Projetos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <AdminProjects />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="experiences">
            <Card className="bg-navy border-gray-700">
              <CardHeader>
                <CardTitle className="text-green-accent">
                  Gerenciar Experiências
                </CardTitle>
              </CardHeader>
              <CardContent>
                <AdminExperiences />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="certifications">
            <Card className="bg-navy border-gray-700">
              <CardHeader>
                <CardTitle className="text-green-accent">
                  Gerenciar Certificações
                </CardTitle>
              </CardHeader>
              <CardContent>
                <AdminCertifications />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="testimonials">
            <Card className="bg-navy border-gray-700">
              <CardHeader>
                <CardTitle className="text-green-accent">
                  Gerenciar Depoimentos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <AdminTestimonials />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
