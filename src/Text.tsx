import { useLoader } from "@react-three/fiber"
import { RGBELoader } from 'three-stdlib'
import {
    Center,
    Text3D,
    MeshTransmissionMaterial
} from '@react-three/drei'
import Grid from "./Grid"

export default function Text({ children, config, font = '/Inter_Medium_Regular.json', ...props }: any) {
    const texture = useLoader(RGBELoader, 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr')
    return (
        <>
            <group>
                <Center scale={[0.8, 1, 1]} front top {...props}>
                    <Text3D
                        castShadow
                        bevelEnabled
                        font={font}
                        scale={5}
                        letterSpacing={-0.03}
                        height={0.25}
                        bevelSize={0.01}
                        bevelSegments={10}
                        curveSegments={128}
                        bevelThickness={0.01}>
                        {children}
                        <MeshTransmissionMaterial {...config} background={texture} />
                    </Text3D>
                </Center>
                <Grid />
            </group>
        </>
    )
}
