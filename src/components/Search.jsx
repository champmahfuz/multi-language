import { resources } from "../Resources/SharedResources";

function Search(props) {
  return (
    <div className="search">
      <form action="#">
        <input
          type="text"
          required
          placeholder={resources[props.langName].SearchHint}
        />
        <button type="submit">
          <svg
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            width="100px"
            height="100px"
            viewBox="0 0 100 100"
            enableBackground="new 0 0 100 100"
          >
            <g>
              <path
                d="M56.774,10.391c-17.679,0-32.001,14.329-32.001,32c0,6.044,1.676,11.695,4.588,16.517L13.846,74.423l0.054,0.054
		c-1.656,1.585-2.673,3.835-2.673,6.378c-0.001,4.913,3.913,8.755,8.821,8.754c2.507-0.001,4.749-1.004,6.349-2.636l0.039,0.039
		l16.008-16.009c4.312,2.163,9.176,3.388,14.33,3.388c17.68,0,31.999-14.327,31.999-32C88.773,24.72,74.453,10.391,56.774,10.391z
		 M56.968,61.808c-11.05,0-20.001-8.954-20.001-20c0-11.044,8.951-20,20.001-20c11.05,0,19.999,8.955,19.999,20
		C76.968,52.854,68.018,61.808,56.968,61.808z"
              />
            </g>
          </svg>
        </button>
      </form>
    </div>
  );
}

export default Search;
