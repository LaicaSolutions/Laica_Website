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
          <header className="text-center mt-16 mb-8 md:mt-24 md:mb-16">
            <h1
              style={{ animationDelay: '0.2s' }}
              className="text-4xl md:text-6xl font-baloo font-bold text-primary animate-fade-in-down"
            >
              Coleção de Atividades 
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
                <TabsList className="bg-black/70 border-2 border-primary p-1 rounded-lg">
                  <TabsTrigger
                    value="all"
                    onClick={() => setFilter('all')}
                    className="px-4 py-2 font-code uppercase text-primary transition-colors rounded-md hover:bg-primary/20 data-[state=active]:bg-pink-500 data-[state=active]:text-background"
                  >
                    Todas
                  </TabsTrigger>
                  <TabsTrigger
                    value="solo"
                    onClick={() => setFilter('Solo')}
                    className="px-4 py-2 font-code uppercase text-primary transition-colors rounded-md hover:bg-primary/20 data-[state=active]:bg-pink-500 data-[state=active]:text-background"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <User className="h-5 w-5" />
                      <span>Solo</span>
                    </div>
                  </TabsTrigger>
                  <TabsTrigger
                    value="duo"
                    onClick={() => setFilter('Duo')}
                    className="px-4 py-2 font-code uppercase text-primary transition-colors rounded-md hover:bg-primary/20 data-[state=active]:bg-pink-500 data-[state=active]:text-background"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Users className="h-5 w-5" />
                      <span>Duo</span>
                    </div>
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
