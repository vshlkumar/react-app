import { Layout } from './layout/layout';
import { Home, About, Contact, Error } from './components';
import { Component, ReactNode } from 'react';
import { Route, Routes } from 'react-router-dom';
import ErrorComponent from './components/error/Error';
import ResponsiveAppBar from './layout/appbarlayout';


export class App extends Component {
  render(): ReactNode {
    return (
      <div>
        <ResponsiveAppBar />
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%"
        }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/*' element={<ErrorComponent />} />
          </Routes>
        </div>
      </div>
    );
  }
}
