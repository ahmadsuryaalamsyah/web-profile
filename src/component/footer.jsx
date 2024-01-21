const Footer = () => {
  return (
    <footer class="bg-neutral-900  border-t border-green-500">
      <div class="w-full  mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{' '}
          <a href="https://flowbite.com/" class="hover:underline ">
            Surya Alam
          </a>
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#about" class="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="#skill" class="hover:underline me-4 md:me-6">
              Skill
            </a>
          </li>

          <li>
            <a href="#contact" class="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;