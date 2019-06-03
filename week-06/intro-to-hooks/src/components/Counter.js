import React, { useState } from 'react'

export default function Counter(props) {
  console.log({ props })
  const [count, setCount] = useState(parseInt(props.startingCount))
  const [mermaids, updateMermaids] = useState(props.mermaidCount)
  const [tribeName, setTribeName] = useState(props.tribe)
  const [displayTribeName, setDisplayTribeName] = useState(tribeName)

  console.log({ count, setCount })
  console.log({ useState })

  const updateDisplayForTribe = event => {
    event.preventDefault()
    setDisplayTribeName(tribeName)
  }

  return (
    <>
      <h1>Hello From Hooooooks!!</h1>
      <h2>Roofio!!!!</h2>
      <h3>
        We have {count} {displayTribeName}
      </h3>
      <h3>We have {mermaids} mermaids down by the sea</h3>
      <button onClick={() => setCount(count + 2)}>
        Find a {displayTribeName}
      </button>
      <button onClick={() => updateMermaids(mermaids + 1)}>
        Find a mermaid!
      </button>
      <hr />
      <form onSubmit={updateDisplayForTribe}>
        <input
          type="text"
          value={tribeName}
          onChange={e => setTribeName(e.target.value)}
        />
        <button>submit</button>
      </form>
    </>
  )
}
