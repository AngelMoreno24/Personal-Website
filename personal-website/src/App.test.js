import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders the profile, experience, inline skills, and two featured projects', () => {
  render(<App />);

  expect(screen.getByRole('link', { name: 'Experience' })).toHaveAttribute('href', '#experience');
  expect(screen.getByRole('heading', { name: 'Experience' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Skills' })).toBeInTheDocument();
  expect(screen.getByText(/Computer Science graduate focused on full-stack development, interactive tools/)).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Amazon Sortation Center Associate' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Full-Stack Developer Internship' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Technical Consultant' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'ASU Senior Capstone Project' })).toBeInTheDocument();
  expect(screen.getByText(/Sort and scan packages using warehouse tracking systems/)).toBeInTheDocument();
  expect(screen.getByText(/Designed and enforced Role-Based Access Control/)).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Pathfinding Visualizer' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Algorithm Visualizer' })).toBeInTheDocument();
  expect(screen.queryByRole('heading', { name: 'Ticket Tracker' })).not.toBeInTheDocument();
  expect(screen.getByRole('link', { name: /View more/ })).toHaveAttribute('href', '/projects');
  expect(screen.getByRole('img', { name: 'Portrait photo placeholder' })).toBeInTheDocument();
});

test('renders every project on the projects page', () => {
  window.history.pushState({}, '', '/projects');
  render(<App />);

  expect(screen.getByRole('heading', { name: 'Projects' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Pathfinding Visualizer' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Ticket Tracker' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Back to home/ })).toHaveAttribute('href', '/#about');

  window.history.pushState({}, '', '/');
});

test('the theme toggle switches between dark and light modes', () => {
  const { container } = render(<App />);
  const themeToggle = screen.getByRole('button', { name: 'Switch to light mode' });

  fireEvent.click(themeToggle);

  expect(container.querySelector('.site-shell')).toHaveAttribute('data-theme', 'light');
  expect(screen.getByRole('button', { name: 'Switch to dark mode' })).toBeInTheDocument();
});
