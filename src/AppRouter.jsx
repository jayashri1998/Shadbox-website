import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home/Home';
import Career from './Pages/Career';
import Service from './Pages/Service';
import Contact from './Pages/Contact';
import About from './Pages/About';
import HireDeveloper from './Pages/HireDeveloper';
import Blog from './Pages/Blog';
import BlogSection from './components/Blog/BlogSection';
import MobileApp from './components/Service/MobileApp';
import WebDevelopment from './components/Service/WebDevelopment';
import HireSoftware from './components/Service/HireSoftware';
import Integration from './components/Service/Integration&Migration';
import UXDesigner from './components/Service/UXDesigner';
import CareerDetails from './components/Career/CareerDetails';
import PrivacyPolicy from './components/OtherFile/PrivacyPolicy';
import Approach from './components/About/Approach';
import Solution from './components/About/Solution';
import Success from './components/About/Success';
import Industries from './components/About/Industries';
import Login from './Pages/Login';
import SigningUp from './Pages/SigningUp';
import CreateCareer from './components/Career/CreateCareer';
import CreateBlog from './components/Blog/CreateBlog';

const AppRouter = () => {
  return (
    <Router basename='/'>
      <Routes>
        <Route path="/" render={() => <Home />} />
        <Route path="/service" render={() => <Service />} />
        <Route path="/about" render={() => <About />} />
        <Route path="/career" render={() => <Career />} />
        <Route path="/contact" render={() => <Contact />} />
        <Route path='/blog' render={() => <Blog />} />
        <Route path='/hiredeveloper' render={() => <HireDeveloper />} />
        <Route path='/blogsection/:id' render={() => <BlogSection />} />
        <Route path='/service/mobileapp' render={() => <MobileApp />} />
        <Route path='/service/webdevelopment' render={() => <WebDevelopment />} />
        <Route path='/service/hiresoftware' render={() => <HireSoftware />} />
        <Route path='/service/integration' render={() => <Integration />} />
        <Route path='/service/uxdesign' render={() => <UXDesigner />} />
        <Route path="/career/details/:id" render={() => <CareerDetails />} />
        <Route path='/privacypolicy' render={() => <PrivacyPolicy />} />
        <Route path='/about/approach' render={() => <Approach />} />
        <Route path='/about/solution' render={() => <Solution />} />
        <Route path='/about/success' render={() => <Success />} />
        <Route path='/about/industries' render={() => <Industries />} />
        <Route path='/login' render={() => <Login />} />
        <Route path='/signingup' render={() => <SigningUp />} />
        <Route path='/createcareer' render={() => <CreateCareer />} />
        <Route path='/createblogs' render={() => <CreateBlog />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
