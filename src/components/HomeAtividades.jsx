import React, { useState } from 'react';
import { PlayIcon, Rocket, User, UserIcon, Users } from 'lucide-react';
import { IntroVideo } from './IntroVideo';
import { CassetteTape } from './CasseteTatpe';
import { activities } from '../data/activities';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';

export default function HomeAtividades() {
  const [filter, setFilter] = useState('all');

  const filteredActivities = activities.filter((activity) =>
    filter === 'all' ? true : activity.type === filter
  );

  return (
    <>
      <IntroVideo />
      <main className="min-h-screen p-4 sm:p-8">
        <div className="container mx-auto">
          <header className="text-center my-8 md:my-16">
            <h1
              style={{ animationDelay: '0.2s' }}
              className="text-4xl md:text-6xl font-baloo font-bold text-primary animate-fade-in-down"
            >
              Coleção de Atividades da Laica
            </h1>
            <p
              style={{ animationDelay: '0.4s' }}
              className="mt-4 text-lg md:text-xl text-accent font-baloo animate-fade-in-up"
            >
              Navegue pelas fitas cassete de Laica e escolha uma atividade para sua aventura cósmica!
            </p>
          </header>

          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
                <TabsList className="bg-black/30 backdrop-blur border border-white/10">
                  <TabsTrigger 
                    value="all"
                    onClick={() => setFilter('all')}
                    className="data-[state=active]:bg-pink-500"
                  >
                    Todas as Atividades
                  </TabsTrigger>
                  <TabsTrigger 
                    value="solo" 
                    onClick={() => setFilter('Solo')}
                    className="data-[state=active]:bg-pink-500"
                  >
                    <User className="mr-1 h-6 w-6" />
                    Missões Solos
                  </TabsTrigger>
                  <TabsTrigger 
                    value="duo" 
                    onClick={() => setFilter('Duo')}
                    className="data-[state=active]:bg-pink-500"
                  >
                    <Users className="mr-1 h-6 w-6" />
                    Missões Duo
                  </TabsTrigger>
                </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredActivities.map((activity, index) => (
                  <div
                    key={activity.id}
                    style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                    className="animate-fade-in-up"
                  >
                    <CassetteTape activity={activity} />
                  </div>
                ))}
              </section>
            </TabsContent>
            <TabsContent value="solo" className="mt-0">
              <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredActivities.map((activity, index) => (
                  <div
                    key={activity.id}
                    style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                    className="animate-fade-in-up"
                  >
                    <CassetteTape activity={activity} />
                  </div>
                ))}
              </section>
            </TabsContent>
            <TabsContent value="duo" className="mt-0">
              <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredActivities.map((activity, index) => (
                  <div
                    key={activity.id}
                    style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                    className="animate-fade-in-up"
                  >
                    <CassetteTape activity={activity} />
                  </div>
                ))}
              </section>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </>
  );
}
