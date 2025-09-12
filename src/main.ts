import { useAddTaskModal } from "./composable/useAddTaskModal";

const InitiliazeModal = useAddTaskModal('#addTaskModal', '#openTaskBtn');

const mobileMenu = document.querySelector('#mobileMenu');
const navBtn = document.querySelector('#navBtn');

navBtn?.addEventListener('click', () => mobileMenu?.classList.toggle('hidden'));
InitiliazeModal();

