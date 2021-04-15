import react, {useState, useEffect} from 'react'

function getScreenSize() {
    if (matchMedia('(max-width: 640px)').matches) {
        return 'sm'
    } else if (matchMedia('(max-width: 768px)').matches) {
        return 'md'
    } else if (matchMedia('(max-width: 1024px)').matches) {
        return 'lg'
    } else if (matchMedia('(max-width: 12880px)').matches) {
        return 'xl'
    } else if (matchMedia('(max-width: 1536px)').matches) {
        return '2xl'
    }
    return 'mega'
}

function useScreenSize() {
    const [screenSize, setScreenSize] = useState(getScreenSize())

    useEffect(() => {
        //set up "screen resized" event listener
        const handleResized = () => {
            setScreenSize(getScreenSize())
        }
        window.addEventListener('resize', handleResized)
        return () => {
            window.removeEventListener('resize', handleResized)
        }
    }, [])

    useEffect(() => {
        console.log(`Screen size is :${screenSize}`)
    }, [screenSize])
} 


export default useScreenSize