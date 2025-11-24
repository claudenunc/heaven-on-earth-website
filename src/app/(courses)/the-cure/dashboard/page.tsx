'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle2, Lock, PlayCircle, BookOpen, Users, MessageCircle, Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Module {
  id: number;
  week: string;
  title: string;
  description: string;
  status: 'locked' | 'available' | 'completed';
  lessons: {
    id: number;
    title: string;
    type: 'video' | 'reading' | 'exercise';
    duration: string;
    completed: boolean;
  }[];
}

export default function DashboardPage() {
  const [userName, setUserName] = useState('Friend');
  const [userTier, setUserTier] = useState<'foundation' | 'transformation' | 'architect'>('foundation');
  const [completedModules, setCompletedModules] = useState(0);
  const [expandedModule, setExpandedModule] = useState<number | null>(null);

  // Mock data - in production, fetch from Supabase based on user auth
  const modules: Module[] = [
    {
      id: 1,
      week: 'Week 1-2',
      title: 'Understanding Consciousness',
      description: 'Learn how your experience of reality is created from the inside-out',
      status: 'available',
      lessons: [
        { id: 1, title: 'Welcome to THE CURE', type: 'video', duration: '15 min', completed: false },
        { id: 2, title: 'The Inside-Out Paradigm', type: 'video', duration: '25 min', completed: false },
        { id: 3, title: 'Reading: The Enlightened Gardener', type: 'reading', duration: '30 min', completed: false },
        { id: 4, title: 'Exercise: Observing Your Thoughts', type: 'exercise', duration: '10 min', completed: false },
      ]
    },
    {
      id: 2,
      week: 'Week 3-4',
      title: 'The Three Principles Deep Dive',
      description: 'Mind, Consciousness, Thought - the forces that create your experience',
      status: 'available',
      lessons: [
        { id: 5, title: 'The Principle of Mind', type: 'video', duration: '20 min', completed: false },
        { id: 6, title: 'The Principle of Consciousness', type: 'video', duration: '20 min', completed: false },
        { id: 7, title: 'The Principle of Thought', type: 'video', duration: '20 min', completed: false },
        { id: 8, title: 'Exercise: Identifying the Three Principles', type: 'exercise', duration: '15 min', completed: false },
      ]
    },
    {
      id: 3,
      week: 'Week 5-6',
      title: 'Thought Awareness',
      description: 'See your thoughts as temporary creations, not permanent truths',
      status: 'locked',
      lessons: [
        { id: 9, title: 'The Nature of Thought', type: 'video', duration: '25 min', completed: false },
        { id: 10, title: 'Thought vs. Reality', type: 'video', duration: '20 min', completed: false },
        { id: 11, title: 'Exercise: Thought Journaling with AI', type: 'exercise', duration: '20 min', completed: false },
      ]
    },
    {
      id: 4,
      week: 'Week 7-8',
      title: 'Emotional Mastery',
      description: 'Use emotions as navigation instead of drowning in them',
      status: 'locked',
      lessons: [
        { id: 12, title: 'Understanding Emotions', type: 'video', duration: '25 min', completed: false },
        { id: 13, title: 'Emotions as Indicators', type: 'video', duration: '20 min', completed: false },
        { id: 14, title: 'Exercise: Emotional Processing', type: 'exercise', duration: '15 min', completed: false },
      ]
    },
    {
      id: 5,
      week: 'Week 9-10',
      title: 'Relationship Transformation',
      description: 'When you change your understanding, relationships change automatically',
      status: 'locked',
      lessons: [
        { id: 15, title: 'Inside-Out Relationships', type: 'video', duration: '30 min', completed: false },
        { id: 16, title: 'Letting Go of Control', type: 'video', duration: '25 min', completed: false },
        { id: 17, title: 'Exercise: Relationship Reflection', type: 'exercise', duration: '20 min', completed: false },
      ]
    },
    {
      id: 6,
      week: 'Week 11-12',
      title: 'Living THE CURE',
      description: 'Integration, practice, and building your new life',
      status: 'locked',
      lessons: [
        { id: 18, title: 'Integration Strategies', type: 'video', duration: '25 min', completed: false },
        { id: 19, title: 'Building Habits', type: 'video', duration: '20 min', completed: false },
        { id: 20, title: 'Final Reflection & Next Steps', type: 'exercise', duration: '30 min', completed: false },
      ]
    },
  ];

  const totalModules = modules.length;
  const progressPercentage = (completedModules / totalModules) * 100;

  const toggleModule = (moduleId: number) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  const markLessonComplete = (moduleId: number, lessonId: number) => {
    // In production, update Supabase
    console.log(`Marking lesson ${lessonId} in module ${moduleId} as complete`);
  };

  return (
    <main className="min-h-screen bg-soft-sky bg-opacity-20">
      {/* Header */}
      <section className="bg-navy text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="font-heading text-3xl md:text-5xl mb-4">
              Welcome back, {userName}!
            </h1>
            <div className="flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center gap-2 bg-gold text-navy px-4 py-2 rounded-full font-bold">
                {userTier.charAt(0).toUpperCase() + userTier.slice(1)} Tier
              </span>
              <span className="text-soft-sky">
                {completedModules} of {totalModules} modules completed
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Overview */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Your Progress</CardTitle>
                <CardDescription>Keep going! Transformation happens one step at a time.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-navy">Course Completion</span>
                    <span className="text-sm font-medium text-navy">{Math.round(progressPercentage)}%</span>
                  </div>
                  <div className="w-full bg-soft-sky bg-opacity-30 rounded-full h-3">
                    <div
                      className="bg-living-green h-3 rounded-full transition-all duration-500"
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  {completedModules === 0 && "Start with Week 1-2 to begin your transformation journey."}
                  {completedModules > 0 && completedModules < totalModules && "You're making great progress! Keep going."}
                  {completedModules === totalModules && "Congratulations! You've completed THE CURE. Keep practicing what you've learned."}
                </p>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <PlayCircle className="w-12 h-12 text-gold mx-auto mb-3" />
                  <h3 className="font-heading text-lg mb-2">Continue Learning</h3>
                  <p className="text-sm text-gray-600">Resume where you left off</p>
                </CardContent>
              </Card>

              {(userTier === 'transformation' || userTier === 'architect') && (
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <Calendar className="w-12 h-12 text-purple-dawn mx-auto mb-3" />
                    <h3 className="font-heading text-lg mb-2">Group Calls</h3>
                    <p className="text-sm text-gray-600">Join weekly live sessions</p>
                  </CardContent>
                </Card>
              )}

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-living-green mx-auto mb-3" />
                  <h3 className="font-heading text-lg mb-2">Community</h3>
                  <p className="text-sm text-gray-600">Connect with others</p>
                </CardContent>
              </Card>
            </div>

            {/* Course Modules */}
            <h2 className="font-heading text-2xl md:text-3xl text-navy mb-6">
              Course Curriculum
            </h2>

            <div className="space-y-4">
              {modules.map((module) => (
                <Card
                  key={module.id}
                  className={`transition-all ${
                    module.status === 'locked' ? 'opacity-60' : 'cursor-pointer hover:shadow-lg'
                  }`}
                >
                  <CardHeader
                    onClick={() => module.status !== 'locked' && toggleModule(module.id)}
                    className="cursor-pointer"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-grow">
                        <div className="flex items-center gap-3 mb-2">
                          {module.status === 'completed' && (
                            <CheckCircle2 className="w-6 h-6 text-living-green flex-shrink-0" />
                          )}
                          {module.status === 'locked' && (
                            <Lock className="w-6 h-6 text-gray-400 flex-shrink-0" />
                          )}
                          {module.status === 'available' && (
                            <PlayCircle className="w-6 h-6 text-gold flex-shrink-0" />
                          )}
                          <div>
                            <p className="text-sm text-gray-600 font-mono mb-1">{module.week}</p>
                            <CardTitle className="text-xl">{module.title}</CardTitle>
                          </div>
                        </div>
                        <CardDescription>{module.description}</CardDescription>
                      </div>
                      {module.status !== 'locked' && (
                        <Button variant="ghost" size="sm">
                          {expandedModule === module.id ? '▲' : '▼'}
                        </Button>
                      )}
                    </div>
                  </CardHeader>

                  {expandedModule === module.id && (
                    <CardContent>
                      <div className="space-y-3 border-t pt-4">
                        {module.lessons.map((lesson) => (
                          <div
                            key={lesson.id}
                            className="flex items-center justify-between p-3 bg-soft-sky bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              {lesson.type === 'video' && <PlayCircle className="w-5 h-5 text-navy" />}
                              {lesson.type === 'reading' && <BookOpen className="w-5 h-5 text-navy" />}
                              {lesson.type === 'exercise' && <MessageCircle className="w-5 h-5 text-navy" />}
                              <div>
                                <p className="font-medium text-navy">{lesson.title}</p>
                                <p className="text-sm text-gray-600">{lesson.duration}</p>
                              </div>
                            </div>
                            {lesson.completed ? (
                              <CheckCircle2 className="w-5 h-5 text-living-green" />
                            ) : (
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => markLessonComplete(module.id, lesson.id)}
                              >
                                Start
                              </Button>
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t">
                        <Button className="w-full">
                          Continue Module
                        </Button>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>

            {/* Tier-Specific Features */}
            {(userTier === 'transformation' || userTier === 'architect') && (
              <Card className="mt-12 bg-gold/10 border-gold">
                <CardHeader>
                  <CardTitle>Exclusive {userTier} Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Calendar className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-navy mb-1">Weekly Group Calls</h4>
                        <p className="text-sm text-gray-700">Next call: Tuesday, 7pm EST</p>
                        <Button size="sm" variant="outline" className="mt-2">Join Call</Button>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MessageCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-navy mb-1">Direct Support</h4>
                        <p className="text-sm text-gray-700">Get answers to your questions</p>
                        <Button size="sm" variant="outline" className="mt-2">Send Message</Button>
                      </div>
                    </div>

                    {userTier === 'architect' && (
                      <div className="flex items-start gap-3">
                        <Users className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-navy mb-1">1-on-1 Sessions</h4>
                          <p className="text-sm text-gray-700">2 sessions remaining</p>
                          <Button size="sm" variant="outline" className="mt-2">Schedule Session</Button>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Support Resources */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <Button variant="outline" className="justify-start">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Course FAQ
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Contact Support
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Users className="w-4 h-4 mr-2" />
                    Community Forum
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <PlayCircle className="w-4 h-4 mr-2" />
                    Quick Start Guide
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
