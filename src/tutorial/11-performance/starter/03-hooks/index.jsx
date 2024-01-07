import { useState, useCallback, useMemo } from 'react'
import { data } from '../../../../data'
import List from './List'
import slowFunction from './slowFunction'

const LowerState = () => {
  const [people, setPeople] = useState(data)
  const [count, setCount] = useState(0)

  console.log('Funksiya ise baslayir..')
  const value = useMemo(() => slowFunction(), [])
  console.log('Funksiya tamamlandi. Netice:', value)

  const removePerson = useCallback(
    (id) => {
      const newPeople = people.filter((person) => person.id !== id)
      setPeople(newPeople)
      console.log(people)
    },
    [people]
  )

  return (
    <section>
      <button
        className="btn"
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: '1rem' }}
      >
        count {count}
      </button>
      <List people={people} removePerson={removePerson} />
    </section>
  )
}
export default LowerState
