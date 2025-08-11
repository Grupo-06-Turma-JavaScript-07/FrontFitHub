// src/components/dashboard/Dashboard.tsx
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';

// Dados estáticos para o nosso gráfico de exemplo
const data = [
    { name: 'Superiores', value: 400 },
    { name: 'Inferiores', value: 300 },
    { name: 'Cardio', value: 300 },
    { name: 'Funcional', value: 200 },
];

// Cores para cada fatia do gráfico
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

function Dashboard() {
    const { user } = useContext(AppContext);
    // Cálculo de IMC estático, como no design
    const imc = user?.imc;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Card do IMC */}
            <div className="bg-neutral-800 p-6 rounded-lg flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold uppercase text-yellow-400 font-anton">Seu IMC</h2>
                <p className="text-8xl font-bold my-4">{imc}</p>
                {/* Poderíamos adicionar uma lógica para mostrar "Peso Normal", "Sobrepeso", etc. */}
                <p className="text-lg text-amber-100">Classificação: Sobrepeso</p>
            </div>

            {/* Card da Evolução dos Treinos com o Gráfico */}
            <div className="bg-neutral-800 p-6 rounded-lg">
                <h2 className="text-2xl font-bold uppercase text-yellow-400 font-anton text-center mb-4">Evolução dos Treinos</h2>
                <div style={{ width: '100%', height: 300 }}>
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {data.map((_entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;