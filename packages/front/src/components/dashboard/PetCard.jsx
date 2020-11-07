import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function PetCard(props) {
  // const link = "/myPets/" + props.pet.name;

  const iconStyle = 'w-16 h-16 md:w-20 md:h-20  m-auto fill-current';

  const defaultIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={iconStyle}
    >
      <path
        d="M378.608,290.994C344.16,249.402,300.618,226.496,256,226.496s-88.161,22.906-122.607,64.498
        c-30.964,37.385-49.448,84.501-49.448,126.035c0,20.176,6.168,35.544,18.332,45.679c12.006,10.004,27.857,13.388,45.541,13.387
        c18.817,0,39.711-3.832,60.24-7.598c17.939-3.291,34.883-6.399,47.943-6.399c11.272,0,27.165,2.95,43.988,6.073
        c39.317,7.3,83.881,15.572,109.624-5.832c12.238-10.175,18.443-25.42,18.443-45.31
        C428.057,375.495,409.572,328.379,378.608,290.994z M390.433,439.271c-14.923,12.409-53.762,5.198-84.97-0.595
        c-18.221-3.383-35.431-6.578-49.464-6.578c-15.789,0-34.036,3.348-53.356,6.892c-29.931,5.49-67.181,12.324-81.165,0.671
        c-1.864-1.553-7.536-6.279-7.536-22.633c0-34.246,16.306-75.208,42.553-106.899c28.645-34.586,63.983-53.634,99.503-53.634
        c35.52,0,70.858,19.048,99.503,53.634c26.248,31.691,42.553,72.653,42.553,106.899
        C398.057,432.933,392.319,437.704,390.433,439.271z"
      />
      <path
        d="M382.13,65.146c-12.604-18.583-30.652-29.239-49.517-29.239c-18.866,0-36.913,10.658-49.517,29.239
        c-11.578,17.071-17.955,39.489-17.955,63.125c0,23.636,6.376,46.054,17.955,63.125c12.604,18.582,30.652,29.24,49.517,29.24
        c18.866,0,36.913-10.658,49.517-29.24c11.578-17.071,17.955-39.489,17.955-63.125C400.085,104.635,393.709,82.216,382.13,65.146z
         M357.303,174.557c-4.073,6.005-12.697,16.08-24.69,16.08c-11.993,0-20.616-10.074-24.69-16.08
        c-8.124-11.978-12.783-28.849-12.783-46.286c0-17.438,4.66-34.308,12.783-46.286c4.073-6.005,12.697-16.08,24.69-16.08
        c11.993,0,20.617,10.074,24.69,16.08c8.124,11.978,12.783,28.849,12.783,46.286C370.085,145.708,365.427,162.579,357.303,174.557z
        "
      />
      <path
        d="M228.905,65.145c-12.604-18.583-30.651-29.24-49.517-29.24s-36.914,10.658-49.517,29.24
        c-11.578,17.071-17.955,39.489-17.955,63.125s6.376,46.054,17.955,63.125c12.604,18.583,30.651,29.241,49.517,29.241
        s36.913-10.658,49.517-29.241c11.578-17.071,17.955-39.488,17.955-63.125C246.859,104.634,240.483,82.215,228.905,65.145z
         M204.076,174.557c-4.073,6.005-12.697,16.08-24.689,16.08c-11.993,0-20.617-10.075-24.69-16.08
        c-8.124-11.978-12.783-28.849-12.783-46.286c0-17.438,4.66-34.308,12.783-46.286c4.073-6.005,12.697-16.08,24.69-16.08
        s20.616,10.074,24.689,16.08c8.124,11.978,12.783,28.849,12.783,46.286C216.859,145.708,212.2,162.579,204.076,174.557z"
      />
      <path
        d="M509.019,210.133c-5.081-17.284-15.972-29.843-30.665-35.362c-11.824-4.441-25.171-3.688-37.583,2.121
        c-17.105,8.004-31.086,24.532-38.356,45.345c-5.941,17.008-6.682,34.985-2.085,50.622c5.081,17.284,15.972,29.843,30.666,35.362
        c5.085,1.91,10.45,2.859,15.902,2.859c7.227,0,14.607-1.669,21.682-4.98c17.105-8.004,31.086-24.532,38.356-45.344v-0.001
        C512.876,243.748,513.617,225.77,509.019,210.133z M478.614,250.862c-4.556,13.041-13.061,23.533-22.75,28.067
        c-3.563,1.666-8.938,3.229-14.32,1.208c-12.988-4.879-18.04-27.313-10.81-48.007c4.556-13.041,13.061-23.533,22.751-28.068
        c2.362-1.105,5.52-2.164,8.948-2.164c1.744,0,3.558,0.274,5.371,0.955C480.792,207.733,485.844,230.167,478.614,250.862z"
      />
      <path
        d="M109.587,222.235c-7.271-20.813-21.252-37.34-38.356-45.344c-12.413-5.809-25.761-6.561-37.584-2.121
        c-14.694,5.52-25.585,18.079-30.666,35.362c-4.597,15.637-3.856,33.615,2.085,50.622v0.001
        c7.272,20.813,21.252,37.34,38.356,45.344c7.076,3.311,14.455,4.98,21.682,4.98c5.452,0,10.818-0.95,15.902-2.859
        c14.696-5.52,25.586-18.079,30.667-35.362C116.268,257.222,115.527,239.244,109.587,222.235z M70.456,280.137
        c-5.381,2.021-10.757,0.458-14.319-1.208c-9.689-4.534-18.195-15.026-22.75-28.067v0.001c-7.229-20.695-2.178-43.128,10.81-48.008
        c5.38-2.021,10.757-0.458,14.32,1.208c9.69,4.535,18.195,15.027,22.75,28.067C88.496,252.825,83.444,275.258,70.456,280.137z"
      />
    </svg>
  );

  const cat = (
    <svg
      className={iconStyle}
      id="Layer_1"
      enable-background="new 0 0 512.023 512.023"
      height="512"
      viewBox="0 0 512.023 512.023"
      width="512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m296.19 309.532h-15c-5.061 0-9.178-4.117-9.178-9.178v-2.151l9.064-13.111c6.203-8.972-.219-21.218-11.126-21.218h-27.877c-10.907 0-17.328 12.246-11.126 21.218l9.064 13.111v2.151c0 5.061-4.117 9.178-9.178 9.178h-15c-8.836 0-16 7.164-16 16s7.164 16 16 16c15.898 0 27.14 1.48 40.178-8.629 12.982 10.065 24.384 8.629 40.178 8.629 8.836 0 16-7.164 16-16s-7.163-16-15.999-16z" />
      <circle cx="188.745" cy="220.206" r="19.841" />
      <circle cx="323.279" cy="220.206" r="19.841" />
      <path d="m511.581 230.764c-2.037-8.599-10.658-13.918-19.257-11.882l-43.209 10.234c-1.61-24.418-8.594-47.878-20.452-69.231v-125.891c0-28.031-32.091-43.97-54.428-27.054l-78.796 59.676c-25.652-4.837-52.583-4.954-78.855 0l-78.796-59.677c-22.345-16.922-54.428-.966-54.428 27.055v125.892c-11.859 21.353-18.842 44.813-20.452 69.231l-43.209-10.234c-8.6-2.035-17.22 3.283-19.257 11.882-2.037 8.599 3.283 17.22 11.882 19.257l51.707 12.247c2.388 17.606 7.613 34.602 15.462 50.545l-38.753 7.861c-8.66 1.757-14.257 10.201-12.5 18.861 1.539 7.587 8.21 12.822 15.664 12.822 2.307 0-1.25.58 53.671-10.56 7.496 9.736 16.081 18.815 25.72 27.141-31.683 46.629-27.636 86.738-27.636 127.085 0 8.836 7.164 16 16 16h288.705c8.836 0 16-7.164 16-16 0-40.936 4.014-80.506-27.636-127.085 9.638-8.325 18.223-17.404 25.72-27.141l50.473 10.238c8.675 1.759 17.108-3.855 18.861-12.5 1.757-8.66-3.84-17.104-12.5-18.861l-38.753-7.861c7.849-15.944 13.075-32.94 15.462-50.545l51.707-12.247c8.6-2.038 13.92-10.659 11.883-19.258zm-118.025-198.315c1.294-.978 3.107-.083 3.107 1.544v84.431c-18.374-17.774-39.756-31.363-62.934-40.666zm-277.121-.19c1.631-.811-3.467-3.974 61.859 45.5-23.163 9.297-44.549 22.881-62.934 40.666 0-93.094-.461-85.403 1.075-86.166zm267.929 447.764h-256.705c0-25.045-2.474-56.303 21.508-92.25 64.407 39.184 149.242 39.208 213.689 0 23.393 35.065 21.508 64.866 21.508 92.25zm15.368-173.862-35.163-7.132c-8.66-1.757-17.104 3.84-18.861 12.5s3.84 17.104 12.5 18.861l20.282 4.114c-64.604 67.546-180.382 67.513-244.955 0l20.282-4.114c8.66-1.757 14.257-10.201 12.5-18.861s-10.2-14.255-18.861-12.5l-35.163 7.132c-6.396-11.182-11.214-23.205-14.209-35.828l38.465 9.11c8.646 2.046 17.231-3.329 19.257-11.882 2.037-8.599-3.283-17.22-11.882-19.257l-49.34-11.686c2.035-78.432 73.666-141.674 161.429-141.674s159.394 63.242 161.429 141.674l-49.34 11.686c-8.599 2.037-13.918 10.658-11.882 19.257 2.032 8.577 10.636 13.923 19.257 11.882l38.465-9.11c-2.996 12.623-7.814 24.646-14.21 35.828z" />
    </svg>
  );

  const dog = (
    <svg
      className={iconStyle}
      id="Layer_1"
      enable-background="new 0 0 512 512"
      height="512"
      viewBox="0 0 512 512"
      width="512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m467.534 112.088c-23.073-29.237-57.683-64.088-91.534-64.088-10.27 0-20.622 7.034-34.594 20.191-19.785-8.821-63.312-20.191-85.406-20.191-22.113 0-65.64 11.378-85.406 20.191-13.972-13.157-24.324-20.191-34.594-20.191-33.851 0-68.461 34.851-91.534 64.088-17.192 21.785-44.466 62.743-44.466 79.912 0 32.247 1.043 46.724 27.2 81.6 19.966 26.621 22.082 65.4 35.475 86.458 8.763 13.779 21.977 19.27 37.206 15.464 15.176-3.794 25.03-16.588 29.396-38.087 16.89 23.263 14.047 36.937 15.162 44.849 1.123 30.142 52.694 81.716 111.561 81.716 58.77 0 110.436-51.52 111.561-81.715 1.109-7.873-1.828-21.567 15.148-44.913 4.463 22.044 16.021 39.329 38.588 39.329 42.297 0 35.241-65.418 63.502-103.1 26.157-34.876 27.2-49.353 27.2-81.6.001-17.17-27.273-58.128-44.465-79.913zm-211.534 231.912c-8.33 0-18.196-12.575-22.268-20.516 11.83-4.646 32.698-4.648 44.535 0-4.071 7.941-13.937 20.516-22.267 20.516zm-.001 63.962c10.396 7.852 23.978 12.591 37.934 14.341-25.229 12.909-50.609 12.923-75.867 0 13.955-1.75 27.538-6.489 37.933-14.341zm203.201-153.562c-25.193 33.589-29.058 82.236-38.207 90.281-5.711-.52-7.822-17.966-8.331-23.682-2.622-29.497 3.338-71.64 3.338-96.999 0-43.279-32.313-108.404-33.689-111.155-3.952-7.904-13.564-11.106-21.466-7.156-7.904 3.952-11.107 13.563-7.156 21.466 8.431 16.862 30.311 67.13 30.311 96.845 0 16.692-3.052 43.399-3.821 69.035-8.651 7.456-44.179 40.656-44.179 82.965 0 19.833-55.647 19.892-65.865.533-.43-.816-1.023-1.751-1.658-2.544 24.039-7.67 43.523-37.929 43.523-53.989 0-42.948-112-42.948-112 0 0 16.054 19.418 46.297 43.523 53.989-.627.782-1.22 1.713-1.658 2.543-10.253 19.418-65.865 19.266-65.865-.532 0-42.309-35.528-75.509-44.179-82.965-.741-24.706-3.821-52.753-3.821-69.035 0-29.642 21.882-79.961 30.311-96.845 3.952-7.903.748-17.514-7.156-21.466-7.903-3.952-17.515-.748-21.466 7.156-1.376 2.751-33.689 67.876-33.689 111.155 0 25.372 5.958 67.523 3.337 96.999-.508 5.716-2.619 23.161-8.331 23.682-9.245-8.129-12.925-56.572-38.207-90.281-20.578-27.437-20.797-34.916-20.8-61.529 1.856-7.371 17.018-35.5 39.828-63.768 24.049-29.805 47.328-47.966 62.735-49.051 4.727 2.375 14.519 11.658 22.124 19.262 6.059 6.06 15.832 6.27 22.146.462 7.95-5.427 55.776-19.776 77.168-19.776s69.218 14.349 77.168 19.776c6.307 5.801 16.08 5.604 22.146-.462 13.201-13.201 19.307-17.838 22.126-19.262 15.407 1.087 38.685 19.249 62.732 49.051 22.81 28.268 37.972 56.397 39.828 63.768-.002 26.613-.222 34.092-20.8 61.529z" />
      <circle cx="180" cy="212" r="20" />
      <circle cx="332" cy="212" r="20" />
    </svg>
  );

  const trashIcon = (
    <svg
      class="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
      ></path>
    </svg>
  );

  const petCardStyle =
    'flex flex-col space-y-2 text-center px-2 py-4 cursor-pointer rounded-lg duration-300 ease-in-out transition transform hover:scale-105';

  const petCardFilled =
    petCardStyle +
    ' text-orange-500 border border-orange-500 hover:text-orange-600 hover:border-orange-600';

  const petCardEmpty =
    petCardStyle + ' opacity-25 border-dashed border-2 border-black';

  return (
    <div className={props.pet ? petCardFilled : petCardEmpty}>
      {props.pet ? (
        <button
          className="opacity-50 flex justify-end fill-current text-black hover:text-red-500 hover:opacity-100"
          onClick={props.deletePet}
        >
          {trashIcon}
        </button>
      ) : (
        <div className="w-6 h-6"></div>
      )}

      {props.pet ? (props.pet.species === 'dog' ? dog : cat) : defaultIcon}
      <div>
        <h1 className="text-lg font-semibold capitalize">{props.pet?.name}</h1>
        <h2 className="text-md capitalize">
          {props.pet?.breed}{' '}
          {props.pet?.size == 'large'
            ? 'L'
            : props.pet?.size == 'medium'
            ? 'M'
            : props.pet?.size == 'small'
            ? 'S'
            : null}
        </h2>
        {!props.pet && (
          <h1 className="text-lg font-semibold capitalize py-2">Add Pet</h1>
        )}
      </div>
    </div>
  );
}

export default PetCard;
