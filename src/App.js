import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { OrganizationsPage } from './pages/Organizations';
import { StudentsAgainstRacismPage } from './pages/StudentsAgainstRacism';
import { GovernmentPolicyPage } from './pages/GovernmentPolicy';
import { RotterdamHistoryPage } from './pages/RotterdamHistory';
import { ExperiencePage } from './pages/Experience';
import { LiteraturePage } from './pages/Literature';
import './bootstrap.scss';
import './App.scss';
import 'semantic-ui-css/semantic.min.css';


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/organizations" element={<OrganizationsPage />} />
      <Route
        path="/studentsAgainstRacism"
        element={<StudentsAgainstRacismPage />}
      />
      <Route path="/policy" element={<GovernmentPolicyPage />} />
      <Route path="/history" element={<RotterdamHistoryPage />} />
      <Route path="/experience" element={<ExperiencePage />} />
      <Route path="/literature" element={<LiteraturePage />} />
    </Routes>
  );
};
