import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

type Project = {
  id: number;
  title: string;
  description: string;
  budget: string;
  category: string;
  deadline: string;
  bids: number;
};

type Freelancer = {
  id: number;
  name: string;
  avatar: string;
  role: string;
  rating: number;
  completed: number;
  hourlyRate: string;
  skills: string[];
};

type Message = {
  id: number;
  from: string;
  preview: string;
  time: string;
  unread: boolean;
};

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Разработка мобильного приложения для доставки',
      description: 'Требуется создать iOS и Android приложение с интеграцией платежных систем',
      budget: '150,000 ₽',
      category: 'Разработка',
      deadline: '30 дней',
      bids: 12
    },
    {
      id: 2,
      title: 'Дизайн корпоративного сайта',
      description: 'Необходим современный дизайн для сайта IT компании',
      budget: '50,000 ₽',
      category: 'Дизайн',
      deadline: '14 дней',
      bids: 8
    },
    {
      id: 3,
      title: 'Контент для социальных сетей',
      description: 'Создание контент-плана и постов для Instagram на месяц',
      budget: '25,000 ₽',
      category: 'Маркетинг',
      deadline: '7 дней',
      bids: 15
    }
  ];

  const freelancers: Freelancer[] = [
    {
      id: 1,
      name: 'Анна Соколова',
      avatar: '/placeholder.svg',
      role: 'Full-stack разработчик',
      rating: 4.9,
      completed: 127,
      hourlyRate: '2,500 ₽/час',
      skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL']
    },
    {
      id: 2,
      name: 'Дмитрий Волков',
      avatar: '/placeholder.svg',
      role: 'UI/UX дизайнер',
      rating: 4.8,
      completed: 94,
      hourlyRate: '2,000 ₽/час',
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research']
    },
    {
      id: 3,
      name: 'Елена Морозова',
      avatar: '/placeholder.svg',
      role: 'Маркетолог',
      rating: 5.0,
      completed: 156,
      hourlyRate: '1,800 ₽/час',
      skills: ['SMM', 'SEO', 'Content Strategy', 'Analytics']
    }
  ];

  const messages: Message[] = [
    {
      id: 1,
      from: 'Анна Соколова',
      preview: 'Добрый день! Готова приступить к проекту...',
      time: '10:30',
      unread: true
    },
    {
      id: 2,
      from: 'Дмитрий Волков',
      preview: 'Отправил макеты на согласование',
      time: 'Вчера',
      unread: false
    },
    {
      id: 3,
      from: 'Поддержка',
      preview: 'Ваш платеж успешно обработан',
      time: '2 дня назад',
      unread: false
    }
  ];

  const handleCreateProject = () => {
    toast.success('Проект успешно создан!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-primary flex items-center">
                <Icon name="Briefcase" className="mr-2" size={28} />
                FreelanceHub
              </h1>
              <div className="hidden md:flex space-x-1">
                <Button
                  variant={activeTab === 'home' ? 'default' : 'ghost'}
                  onClick={() => setActiveTab('home')}
                  className="text-sm"
                >
                  <Icon name="Home" size={18} className="mr-2" />
                  Главная
                </Button>
                <Button
                  variant={activeTab === 'projects' ? 'default' : 'ghost'}
                  onClick={() => setActiveTab('projects')}
                  className="text-sm"
                >
                  <Icon name="FolderKanban" size={18} className="mr-2" />
                  Проекты
                </Button>
                <Button
                  variant={activeTab === 'freelancers' ? 'default' : 'ghost'}
                  onClick={() => setActiveTab('freelancers')}
                  className="text-sm"
                >
                  <Icon name="Users" size={18} className="mr-2" />
                  Фрилансеры
                </Button>
                <Button
                  variant={activeTab === 'messages' ? 'default' : 'ghost'}
                  onClick={() => setActiveTab('messages')}
                  className="text-sm"
                >
                  <Icon name="MessageSquare" size={18} className="mr-2" />
                  Сообщения
                </Button>
                <Button
                  variant={activeTab === 'payments' ? 'default' : 'ghost'}
                  onClick={() => setActiveTab('payments')}
                  className="text-sm"
                >
                  <Icon name="CreditCard" size={18} className="mr-2" />
                  Платежи
                </Button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Icon name="Bell" size={18} className="mr-2" />
                <Badge variant="destructive" className="ml-1">3</Badge>
              </Button>
              <Avatar className="cursor-pointer hover:ring-2 ring-primary transition-all">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>ВА</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'home' && (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 text-white shadow-xl">
              <div className="max-w-3xl">
                <h2 className="text-4xl font-bold mb-4">Находите лучших специалистов для ваших проектов</h2>
                <p className="text-lg mb-6 text-blue-100">
                  Платформа для надежного сотрудничества фрилансеров и заказчиков с прозрачной системой оплаты
                </p>
                <div className="flex space-x-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="lg" variant="secondary" className="shadow-lg hover:shadow-xl transition-shadow">
                        <Icon name="Plus" size={20} className="mr-2" />
                        Создать проект
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Создание нового проекта</DialogTitle>
                        <DialogDescription>
                          Опишите ваш проект, и фрилансеры смогут оставить предложения
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="title">Название проекта</Label>
                          <Input id="title" placeholder="Например: Разработка веб-сайта" />
                        </div>
                        <div>
                          <Label htmlFor="description">Описание</Label>
                          <Textarea id="description" placeholder="Подробно опишите требования к проекту" rows={4} />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="budget">Бюджет (₽)</Label>
                            <Input id="budget" type="number" placeholder="50000" />
                          </div>
                          <div>
                            <Label htmlFor="category">Категория</Label>
                            <Select>
                              <SelectTrigger id="category">
                                <SelectValue placeholder="Выберите категорию" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="dev">Разработка</SelectItem>
                                <SelectItem value="design">Дизайн</SelectItem>
                                <SelectItem value="marketing">Маркетинг</SelectItem>
                                <SelectItem value="writing">Копирайтинг</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <Button onClick={handleCreateProject} className="w-full">
                          Опубликовать проект
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                    <Icon name="Search" size={20} className="mr-2" />
                    Найти фрилансера
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <Icon name="Shield" size={24} className="text-primary" />
                  </div>
                  <CardTitle>Безопасные сделки</CardTitle>
                  <CardDescription>
                    Эскроу-счета защищают интересы обеих сторон
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-2">
                    <Icon name="Percent" size={24} className="text-accent" />
                  </div>
                  <CardTitle>Честная комиссия</CardTitle>
                  <CardDescription>
                    Всего 20% от суммы сделки для поддержки платформы
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-2">
                    <Icon name="Star" size={24} className="text-blue-500" />
                  </div>
                  <CardTitle>Система рейтингов</CardTitle>
                  <CardDescription>
                    Прозрачные отзывы от реальных клиентов
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Актуальные проекты</h3>
                <Button variant="link" onClick={() => setActiveTab('projects')}>
                  Смотреть все <Icon name="ArrowRight" size={18} className="ml-1" />
                </Button>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {projects.slice(0, 3).map((project) => (
                  <Card key={project.id} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <Badge variant="secondary">{project.category}</Badge>
                            <span className="text-sm text-muted-foreground">
                              <Icon name="Clock" size={14} className="inline mr-1" />
                              {project.deadline}
                            </span>
                          </div>
                          <CardTitle className="mb-2">{project.title}</CardTitle>
                          <CardDescription>{project.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                          <span className="text-2xl font-bold text-primary">{project.budget}</span>
                          <span className="text-sm text-muted-foreground">
                            <Icon name="Users" size={14} className="inline mr-1" />
                            {project.bids} откликов
                          </span>
                        </div>
                        <Button>
                          Откликнуться
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold">Все проекты</h2>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>
                    <Icon name="Plus" size={18} className="mr-2" />
                    Создать проект
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Создание нового проекта</DialogTitle>
                    <DialogDescription>
                      Опишите ваш проект, и фрилансеры смогут оставить предложения
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="title2">Название проекта</Label>
                      <Input id="title2" placeholder="Например: Разработка веб-сайта" />
                    </div>
                    <div>
                      <Label htmlFor="description2">Описание</Label>
                      <Textarea id="description2" placeholder="Подробно опишите требования к проекту" rows={4} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="budget2">Бюджет (₽)</Label>
                        <Input id="budget2" type="number" placeholder="50000" />
                      </div>
                      <div>
                        <Label htmlFor="category2">Категория</Label>
                        <Select>
                          <SelectTrigger id="category2">
                            <SelectValue placeholder="Выберите категорию" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="dev">Разработка</SelectItem>
                            <SelectItem value="design">Дизайн</SelectItem>
                            <SelectItem value="marketing">Маркетинг</SelectItem>
                            <SelectItem value="writing">Копирайтинг</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <Button onClick={handleCreateProject} className="w-full">
                      Опубликовать проект
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="flex space-x-4">
              <Input
                placeholder="Поиск проектов..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="max-w-md"
              />
              <Select>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Категория" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все категории</SelectItem>
                  <SelectItem value="dev">Разработка</SelectItem>
                  <SelectItem value="design">Дизайн</SelectItem>
                  <SelectItem value="marketing">Маркетинг</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Бюджет" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Любой бюджет</SelectItem>
                  <SelectItem value="low">До 50,000 ₽</SelectItem>
                  <SelectItem value="medium">50,000 - 150,000 ₽</SelectItem>
                  <SelectItem value="high">От 150,000 ₽</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {projects.map((project) => (
                <Card key={project.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant="secondary">{project.category}</Badge>
                          <span className="text-sm text-muted-foreground">
                            <Icon name="Clock" size={14} className="inline mr-1" />
                            {project.deadline}
                          </span>
                        </div>
                        <CardTitle className="mb-2">{project.title}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-4">
                        <span className="text-2xl font-bold text-primary">{project.budget}</span>
                        <span className="text-sm text-muted-foreground">
                          <Icon name="Users" size={14} className="inline mr-1" />
                          {project.bids} откликов
                        </span>
                      </div>
                      <Button>
                        Откликнуться
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'freelancers' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold">Фрилансеры</h2>
            </div>

            <div className="flex space-x-4">
              <Input
                placeholder="Поиск специалистов..."
                className="max-w-md"
              />
              <Select>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Специализация" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все специалисты</SelectItem>
                  <SelectItem value="dev">Разработчики</SelectItem>
                  <SelectItem value="design">Дизайнеры</SelectItem>
                  <SelectItem value="marketing">Маркетологи</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Рейтинг" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Любой рейтинг</SelectItem>
                  <SelectItem value="5">5.0</SelectItem>
                  <SelectItem value="4">4.0+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {freelancers.map((freelancer) => (
                <Card key={freelancer.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={freelancer.avatar} />
                        <AvatarFallback>{freelancer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <CardTitle className="mb-1">{freelancer.name}</CardTitle>
                        <CardDescription className="mb-2">{freelancer.role}</CardDescription>
                        <div className="flex items-center space-x-4 text-sm">
                          <span className="flex items-center">
                            <Icon name="Star" size={14} className="text-yellow-500 mr-1 fill-yellow-500" />
                            {freelancer.rating}
                          </span>
                          <span className="text-muted-foreground">
                            {freelancer.completed} проектов
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {freelancer.skills.map((skill) => (
                          <Badge key={skill} variant="outline">{skill}</Badge>
                        ))}
                      </div>
                      <div className="flex justify-between items-center pt-2 border-t">
                        <span className="text-lg font-semibold text-primary">
                          {freelancer.hourlyRate}
                        </span>
                        <Button>
                          <Icon name="Send" size={16} className="mr-2" />
                          Написать
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'messages' && (
          <div className="grid grid-cols-3 gap-6 animate-fade-in">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Сообщения</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`p-4 cursor-pointer hover:bg-muted/50 transition-colors ${
                        message.unread ? 'bg-primary/5' : ''
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <Avatar>
                          <AvatarFallback>{message.from[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start">
                            <p className="font-medium text-sm truncate">{message.from}</p>
                            <span className="text-xs text-muted-foreground">{message.time}</span>
                          </div>
                          <p className="text-sm text-muted-foreground truncate">{message.preview}</p>
                        </div>
                        {message.unread && (
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-2">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarFallback>АС</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>Анна Соколова</CardTitle>
                    <CardDescription>В сети</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-96 border rounded-lg p-4 mb-4 bg-muted/20">
                  <div className="space-y-4">
                    <div className="flex justify-start">
                      <div className="bg-white rounded-lg p-3 shadow-sm max-w-xs">
                        <p className="text-sm">Добрый день! Готова приступить к проекту</p>
                        <span className="text-xs text-muted-foreground">10:30</span>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-primary text-primary-foreground rounded-lg p-3 shadow-sm max-w-xs">
                        <p className="text-sm">Отлично! Когда можем начать?</p>
                        <span className="text-xs text-blue-100">10:32</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Input placeholder="Введите сообщение..." className="flex-1" />
                  <Button>
                    <Icon name="Send" size={18} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'payments' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold">Платежи</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardDescription>Баланс</CardDescription>
                  <CardTitle className="text-3xl">127,500 ₽</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    <Icon name="Plus" size={18} className="mr-2" />
                    Пополнить
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardDescription>В процессе</CardDescription>
                  <CardTitle className="text-3xl">85,000 ₽</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">3 активных проекта</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardDescription>Комиссия платформы (20%)</CardDescription>
                  <CardTitle className="text-3xl">17,000 ₽</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">За последний месяц</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Способы оплаты</CardTitle>
                <CardDescription>Добавьте платежные системы для вывода средств</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                        <Icon name="Wallet" size={20} className="text-yellow-600" />
                      </div>
                      <div>
                        <p className="font-medium">ЮMoney</p>
                        <p className="text-sm text-muted-foreground">410012345678901</p>
                      </div>
                    </div>
                    <Badge>Подключено</Badge>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <Icon name="Building" size={20} className="text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium">Сбербанк</p>
                        <p className="text-sm text-muted-foreground">•••• 4567</p>
                      </div>
                    </div>
                    <Badge>Подключено</Badge>
                  </div>

                  <Button variant="outline" className="w-full">
                    <Icon name="Plus" size={18} className="mr-2" />
                    Добавить способ оплаты
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>История транзакций</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border-b">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                        <Icon name="ArrowUpRight" size={16} className="text-accent" />
                      </div>
                      <div>
                        <p className="font-medium">Оплата за проект "Мобильное приложение"</p>
                        <p className="text-sm text-muted-foreground">15 ноября 2024</p>
                      </div>
                    </div>
                    <span className="font-semibold text-accent">+ 50,000 ₽</span>
                  </div>

                  <div className="flex items-center justify-between p-3 border-b">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                        <Icon name="ArrowDownRight" size={16} className="text-red-600" />
                      </div>
                      <div>
                        <p className="font-medium">Комиссия платформы</p>
                        <p className="text-sm text-muted-foreground">15 ноября 2024</p>
                      </div>
                    </div>
                    <span className="font-semibold text-red-600">- 10,000 ₽</span>
                  </div>

                  <div className="flex items-center justify-between p-3 border-b">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                        <Icon name="ArrowUpRight" size={16} className="text-accent" />
                      </div>
                      <div>
                        <p className="font-medium">Оплата за проект "Дизайн сайта"</p>
                        <p className="text-sm text-muted-foreground">10 ноября 2024</p>
                      </div>
                    </div>
                    <span className="font-semibold text-accent">+ 35,000 ₽</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
