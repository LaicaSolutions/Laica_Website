// services/preCadastroService.js
import { collection, addDoc, query, where, getDocs, Timestamp } from 'firebase/firestore';
import { db } from '../../firebase';

export const salvarPreCadastro = async (dados) => {
  const preCadastrosRef = collection(db, 'pre-cadastros');

  // Verifica se o email já está cadastrado
  const emailQuery = query(preCadastrosRef, where('email', '==', dados.email));
  const emailSnapshot = await getDocs(emailQuery);

  if (!emailSnapshot.empty) {
    throw new Error('Este e-mail já está cadastrado.');
  }

  // Verifica se o telefone já está cadastrado
  const telefoneQuery = query(preCadastrosRef, where('cellphone', '==', dados.cellphone));
  const telefoneSnapshot = await getDocs(telefoneQuery);

  if (!telefoneSnapshot.empty) {
    throw new Error('Este telefone já está cadastrado.');
  }

  // Salva o pré-cadastro
  await addDoc(preCadastrosRef, dados);
};
