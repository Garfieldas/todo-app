import { initNavBarToggle } from "./utilities/useNavBarToggle";
import { useAddTaskModal } from "./composable/useAddTaskModal";

const InitNavBarToggle = initNavBarToggle('#mobileMenu', '#navBtn');
const InitiliazeModal = useAddTaskModal('#addTaskModal', '#openTaskBtn');

InitNavBarToggle();
InitiliazeModal();

