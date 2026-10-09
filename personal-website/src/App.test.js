import { fireEvent, render, screen, within } from '@testing-library/react';
import App from './App';

test('renders the profile, history tabs, inline skills, and two featured projects', () => {
  render(<App />);

  expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '#about');
  expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '/projects');
  expect(screen.queryByRole('link', { name: 'Education' })).not.toBeInTheDocument();
  expect(screen.getByRole('tab', { name: 'Experience' })).toHaveAttribute('aria-selected', 'true');
  expect(screen.getByRole('heading', { name: 'Skills' })).toBeInTheDocument();
  expect(screen.getByText(/Computer Science graduate focused on full-stack development, interactive tools/)).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Amazon Sortation Center Associate' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Full-Stack Developer Internship' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Technical Consultant' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'ASU Senior Capstone Project' })).toBeInTheDocument();
  expect(screen.getByText(/Sort and scan packages using warehouse tracking systems/)).toBeInTheDocument();
  expect(screen.getByText(/Designed and enforced Role-Based Access Control/)).toBeInTheDocument();
  fireEvent.click(screen.getByRole('tab', { name: 'Education' }));
  expect(screen.getByRole('tab', { name: 'Education' })).toHaveAttribute('aria-selected', 'true');
  expect(screen.getByRole('heading', { name: 'Bachelor of Computer Science' })).toBeInTheDocument();
  expect(screen.getByRole('img', { name: 'Arizona State University' })).toBeInTheDocument();
  expect(screen.getByText('August 2020 - May 2024')).toBeInTheDocument();
  expect(screen.getByText("4-time recipient of the Dean's Honor List")).toBeInTheDocument();
  fireEvent.click(screen.getByRole('tab', { name: 'Experience' }));
  expect(screen.getByRole('heading', { name: 'Amazon Sortation Center Associate' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Ticket Tracker' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Pool Angel' })).toBeInTheDocument();
  expect(screen.queryByRole('heading', { name: 'Pathfinding Visualizer' })).not.toBeInTheDocument();
  expect(screen.getByRole('link', { name: /View more/ })).toHaveAttribute('href', '/projects');
  expect(screen.queryByRole('img', { name: 'Portrait photo placeholder' })).not.toBeInTheDocument();
  expect(screen.getAllByRole('link', { name: 'Website' })).toHaveLength(2);
  expect(screen.getAllByRole('link', { name: 'Source' })).toHaveLength(2);
  expect(screen.queryByText('Live demo')).not.toBeInTheDocument();
  expect(screen.queryByText('SELECTED WORK')).not.toBeInTheDocument();
  expect(screen.queryByText('WORK / EXPERIENCE')).not.toBeInTheDocument();
});

test('renders every project on the projects page', () => {
  window.history.pushState({}, '', '/projects');
  render(<App />);

  expect(screen.getByRole('heading', { name: 'Projects' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Pathfinding Visualizer' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Ticket Tracker' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Pool Angel' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Back to home/ })).toHaveAttribute('href', '/#about');
  expect(screen.getAllByRole('link', { name: 'Website' })).toHaveLength(4);
  expect(screen.getAllByRole('link', { name: 'Source' })).toHaveLength(6);
  const ticketTrackerCard = screen.getByRole('heading', { name: 'Ticket Tracker' }).closest('.project-card');
  const poolAngelCard = screen.getByRole('heading', { name: 'Pool Angel' }).closest('.project-card');
  const expenseTrackerCard = screen.getByRole('heading', { name: 'Expense Tracker' }).closest('.project-card');
  const chatApplicationCard = screen.getByRole('heading', { name: 'Chat Application' }).closest('.project-card');
  expect(within(ticketTrackerCard).getByRole('link', { name: 'Website' })).toHaveAttribute('href', 'https://am-ticket-tracker.netlify.app');
  expect(within(poolAngelCard).getByRole('link', { name: 'Website' })).toHaveAttribute('href', 'https://am-pool-angel.netlify.app/');
  expect(within(poolAngelCard).getByRole('link', { name: 'Source' })).toHaveAttribute('href', 'https://github.com/AngelMoreno24/Pool-Angel');
  expect(within(expenseTrackerCard).queryByRole('link', { name: 'Website' })).not.toBeInTheDocument();
  expect(within(chatApplicationCard).queryByRole('link', { name: 'Website' })).not.toBeInTheDocument();
  expect(screen.queryByText('SELECTED WORK')).not.toBeInTheDocument();

  window.history.pushState({}, '', '/');
});

test('the theme toggle switches between dark and light modes', () => {
  const { container } = render(<App />);
  const themeToggle = screen.getByRole('button', { name: 'Switch to light mode' });

  fireEvent.click(themeToggle);

  expect(container.querySelector('.site-shell')).toHaveAttribute('data-theme', 'light');
  expect(screen.getByRole('button', { name: 'Switch to dark mode' })).toBeInTheDocument();
});
